import { userModel } from "../models/userModel.js";
import { hash, compare } from "bcrypt";
import { endpoints } from "../utils/endpoints.js";
import { findUserbyEmail, createUser } from "../repositories/userRepository.js";
import { createToken } from "../utils/jwt.js";

export const signUpService = async (data) => {
    const { firstName, lastName, email, phone, password, city } = data;
    if (!firstName || !lastName || !email || !phone || !password || !city) {
        throw new Error("all fields are mandatory!!");
    }
    const normalizedEmail = email.toLowerCase(); // normalized krna important h 
    const isUserEmailExists = await findUserbyEmail(normalizedEmail);
    if (isUserEmailExists)
        throw new Error("email already exists, please try with another email");
    const saltRounds = parseInt(endpoints.saltRounds);
    const hashedPassword = await hash(password, saltRounds);
    if (!hashedPassword) throw new Error("Password not hashed");
    const payload = {
        firstName,
        lastName,
        email: normalizedEmail,
        city,
        password: hashedPassword,
        phone,
    };
    const user = await createUser(payload);
    return user;
};
export const loginService = async (data) => {
    const { email, password } = data;
    if (!email || !password) throw new Error("All fields are mandatory!!");
    const isUserEmailExists = await findUserbyEmail(email);
    if (!isUserEmailExists)
        throw new Error("User not found, please signup first");
    const isPasswordValid = await compare(password, isUserEmailExists.password);
    if (!isPasswordValid)
        throw new Error("Password not matched, please try again");
    const token = createToken({
        userEmail: isUserEmailExists.email,
        userName: isUserEmailExists.firstName,
        userId: isUserEmailExists._id,
    });
    if (!token) throw new Error("Authentication token not created");
    return {
        _id: isUserEmailExists._id,
        email: isUserEmailExists.email,
        userName: isUserEmailExists.firstName,
        AccessToken: token,
    };
};
