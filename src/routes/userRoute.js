import { Router } from "express";
import { signUp, login } from "../controllers/userController.js";
const route = Router();


route.post("/signup", signUp);
route.post("/login", login)

export default route;