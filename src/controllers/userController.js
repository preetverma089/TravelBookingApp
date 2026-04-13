import { loginService, signUpService } from "../services/userService.js";


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