import 'dotenv/config';
import nodemailer from 'nodemailer';
import { oAuth2Client } from '../config/oauth2Client.js';

export const sendEmail = async ({ name, email, subject, message, document }) => {
  const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, USER_EMAIL } = process.env;
  const accessToken = await oAuth2Client.getAccessToken();

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: { type: 'OAuth2', user: USER_EMAIL, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET, refreshToken: REFRESH_TOKEN, accessToken },
    tls: { rejectUnauthorized: true }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: USER_EMAIL,
    subject,
    text: `${name} <${email}> ${message}`,
    attachments: []
  };

  if (document) {
    mailOptions.attachments.push({
      filename: document.originalname,
      path: document.path
    });
  }

  return new Promise((resolve, reject) => {
    smtpTransport.sendMail(mailOptions, (error, info) => {
      if (error) reject(error.responseCode);
      resolve(info.response);
    });
  });
};
