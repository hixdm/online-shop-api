import { userController } from "../controllers/user.controller"
import { tokenController } from "../controllers/token.controller"
import express from "express";
import { cartController } from "../controllers/cart.controller";
export const cartRouter=express.Router()

cartRouter.delete('/cart:id',cartController.deleteProductFromCart)
cartRouter.post('/cart',cartController.addProductToCart)