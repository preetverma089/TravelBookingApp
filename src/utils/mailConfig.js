import nodemailer from "nodemailer";
import { endpoints } from "./endpoints.js";
export const transporter = nodemailer.createTransport({
    host: endpoints.MAIL_HOST,
    port: endpoints.MAIL_PORT,
    secure: false, // true for 465
    auth: {
        user: endpoints.MAIL_USER,
        pass: endpoints.MAIL_PASS,
    },
});