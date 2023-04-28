import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser } from "../../api/users/user.services";
import { login } from "../auth.services";
import { signToken } from "../auth.services";
import { sendNodeMailer } from "../../config/nodemailer";
import { welcomeEmail } from "../../utils/emails";

 // create new user
export const signupController = async (
  req: Request,
  res: Response,
 ) => {
  try {
    const { name, last_name, email } = req.body;
    const encPass = await bcrypt.hash(req.body.password, 10);
    const user = await createUser({ ...req.body, password: encPass });

   const token = signToken({id: user.user_id});
 

   await sendNodeMailer(welcomeEmail(user))

    res.status(201).send({message : 'User created successfully', data: { name, last_name, email }, token});
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
 }

 export const loginController = async (
  req: Request,
  res: Response
  ) => {
    try {
      const { email, password } = req.body;
      const user = await login(email);
      
      if (!user) {
        throw new Error ('Email or password are incorrect'); 
      }
      const isValid = await bcrypt.compare(password, user.password);
      
      if (!isValid) {
        throw new Error ('Email or password are incorrect'); 
      }
      const { name, last_name, user_id } = user;
      
      const token = jwt.sign(
        { id: user_id},
        's3cr3tk3y',
        { expiresIn: 60 * 15 }
      )

      res.status(201).send({message : 'User loged in successfully',  data: { email, name, last_name }, token});

    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
 }
