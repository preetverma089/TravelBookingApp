import { loginService, signUpService, profileService, changePasswordService } from "../services/userService.js";


export const signUp = async (req, res) => {

    try {
        const user = await signUpService(req.body);
        res.status(201).json({
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server error", message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const loginUser = await loginService(req.body);
        res.status(201).json({ message: "login succesfully", loginUser })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server error", message: error.message })
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const userDetails = await profileService(req.user);
        return res.status(200).json({ message: "Profile Details Fetched", userDetails })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server error", message: error.message })
    }
}
export const changePassword = async (req, res) => {
    try {
        await changePasswordService(req.user, req.body);
        return res.status(200).json({ message: "password changed succesfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}