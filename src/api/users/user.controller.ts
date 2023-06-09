import { Request, Response } from "express";
import { 
  deleteUser,
  getAllUsers, 
  getUserById,
  updateUser,
 } from "./user.services";
import { AuthUser } from "../../auth/auth.types";

 // gets all the users from the bd
 export const getAllUsersController = async (
  req: Request,
  res: Response,
 ) => {
  try {
    const users = await getAllUsers();
    res.status(200).send({ message: 'Users retrieved successfully', data: users });
  } catch (error: any) {
    res.status(500).json({message: error.message});
  }
 }

 // get single user with id
 export const getUserByIdController = async (
  req: Request,
  res: Response,
 ) =>{
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User with that ID does not exist' });
    }
    
    res.status(200).json({ message: 'User found!', data: user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
 }

 // update user
 export const updateUserController = async (
  req: AuthUser,
  res: Response,
 ) => {
  try {
    const id = req.user;
    const user = await updateUser(id, req.body);
    res.status(200).json({ message: 'User updated', data: user });
  } catch (error: any) {
    res.status(500).json({message: error.message});
  }
 }

 // delete user
 export const deleteUserController = async (
  req: Request,
  res: Response,
 ) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
 }