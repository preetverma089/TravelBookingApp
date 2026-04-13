import { config } from "dotenv";
config();
export const endpoints = {
    port: process.env.PORT || 2122,
    mongoUri: process.NODE_ENV === "production" ? process.env.MONGOURIPROD : process.env.MONGOURI,
    saltRounds: process.env.SALTROUNDS,
    accessToken_Key: process.env.ACCESSTOKENSIGNKEY,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS
}