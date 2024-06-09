import express from "express";
import { loginUser, registerUser, logoutUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser)
userRouter.post("/register", registerUser)
userRouter.get("/logout", logoutUser)

export default userRouter
