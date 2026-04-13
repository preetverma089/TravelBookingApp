import jwt from "jsonwebtoken"
import { endpoints } from "./endpoints.js"

export const createToken = (data) => {
    return jwt.sign(data, endpoints.accessToken_Key, { expiresIn: '1h', issuer: "travel-app", })
}