import { config } from "dotenv";
config();
export const endpoints = {
    port: process.env.PORT || 2122,
    mongoUri: process.NODE_ENV === "production" ? process.env.MONGOURIPROD : process.env.MONGOURI,
    saltRounds: process.env.SALTROUNDS,
    accessToken_Key: process.env.ACCESSTOKENSIGNKEY
}