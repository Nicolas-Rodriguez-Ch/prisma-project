"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNodeMailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const createGmailTransporter = () => {
    const tranporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'nicolasrodriguezch@gmail.com',
            pass: 'kdymozkbgogvxtac'
        },
        logger: false
    });
    return tranporter;
};
const sendNodeMailer = async (data) => {
    const tranporter = createGmailTransporter();
    const info = await tranporter.sendMail(data);
    return info;
};
exports.sendNodeMailer = sendNodeMailer;
