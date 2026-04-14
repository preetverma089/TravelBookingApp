import { Router } from "express";
import { signUp, login, getUserProfile, changePassword } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/canAccess.js";
const route = Router();


route.post("/signup", signUp);
route.post("/login", login)
route.get("/profile", verifyToken, getUserProfile)
route.put("/changePassword", verifyToken, changePassword)
export default route;