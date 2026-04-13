import { userModel } from "../models/userModel.js";

export const findUserbyEmail = async (email) => {
    return userModel.findOne({ email }).lean();
}

export const createUser = async (data) => {
    return userModel.create(data);
}