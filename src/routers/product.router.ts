import { productController } from "../controllers/product.controller"
import express from "express";
export const productRouter=express.Router()

productRouter.get('/product',productController.getProducts)
productRouter.get('/product/:ID',productController.getProductById)
productRouter.post('/product',productController.newProduct)
productRouter.put('/product',productController.putProduct)
productRouter.delete('/product',productController.deleteProduct)
