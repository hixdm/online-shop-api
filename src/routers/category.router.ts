import { categoryController } from "../controllers/category.controller";
import express from "express";
export const categoryRouter=express.Router()

categoryRouter.get('/category',categoryController.getCategory)
categoryRouter.get('/category/:ID',categoryController.getCategoryById)
categoryRouter.post('/category',categoryController.newCategory)
categoryRouter.put('/category/:_id',categoryController.putCategory)
categoryRouter.delete('/category',categoryController.deleteCategory)
