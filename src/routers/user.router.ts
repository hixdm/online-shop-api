import { userController } from "../controllers/user.controller"
import { tokenController } from "../controllers/token.controller"
import express from "express";
export const userRouter=express.Router()

userRouter.get('/user',tokenController.checkToken,userController.getUser)
userRouter.get('/user/:id',tokenController.checkToken,userController.getUserById)
userRouter.put('/user',tokenController.checkToken,userController.updateUser)
userRouter.delete('/user/:id',tokenController.checkToken,userController.deleteUser)