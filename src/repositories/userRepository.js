import { userModel } from "../models/userModel.js";

export const findUserbyEmail = async (email) => {
    return userModel.findOne({ email }).lean();
}

export const createUser = async (data) => {
    return userModel.create(data);
}
export const changePassword = async (data) => {
    return userModel.findByIdAndUpdate(data.id, { password: data.newPassword }, { new: true });
}
export const findUserPassword = async (id) => {
    return userModel.findById(id).select("+password").lean();
}