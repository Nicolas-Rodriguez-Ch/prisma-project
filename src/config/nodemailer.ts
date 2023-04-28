import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const createGmailTransporter = () => {
  const tranporter = nodemailer.createTransport({
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

export const sendNodeMailer =async (data: Mail.Options) => {
  const tranporter = createGmailTransporter();

  const info = await tranporter.sendMail(data);

  return info;
}