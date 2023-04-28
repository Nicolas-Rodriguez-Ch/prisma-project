"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.signupController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_services_1 = require("../../api/users/user.services");
const auth_services_1 = require("../auth.services");
const auth_services_2 = require("../auth.services");
const nodemailer_1 = require("../../config/nodemailer");
const emails_1 = require("../../utils/emails");
// create new user
const signupController = async (req, res) => {
    try {
        const { name, last_name, email } = req.body;
        const encPass = await bcrypt_1.default.hash(req.body.password, 10);
        const user = await (0, user_services_1.createUser)({ ...req.body, password: encPass });
        const token = (0, auth_services_2.signToken)({ id: user.user_id });
        await (0, nodemailer_1.sendNodeMailer)((0, emails_1.welcomeEmail)(user));
        res.status(201).send({ message: 'User created successfully', data: { name, last_name, email }, token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
exports.signupController = signupController;
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await (0, auth_services_1.login)(email);
        if (!user) {
            throw new Error('Email or password are incorrect');
        }
        const isValid = await bcrypt_1.default.compare(password, user.password);
        if (!isValid) {
            throw new Error('Email or password are incorrect');
        }
        const { name, last_name, user_id } = user;
        const token = jsonwebtoken_1.default.sign({ id: user_id }, 's3cr3tk3y', { expiresIn: 60 * 15 });
        res.status(201).send({ message: 'User loged in successfully', data: { email, name, last_name }, token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
exports.loginController = loginController;
