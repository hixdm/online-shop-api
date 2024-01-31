import { authController } from "../controllers/auth.controller";
import { tokenController } from "../controllers/token.controller";
import express from "express";
export const authRouter=express.Router()

authRouter.post("/register",authController.registerUser)
authRouter.post("/login",authController.loginUser)

