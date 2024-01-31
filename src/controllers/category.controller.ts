import { Request, Response } from "express";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

export const categoryController = {
    getCategory: async (req: Request, res: Response) => {
        try {
            const categories = await Category.find();
            res.status(200).json({ message: categories, code: 200 });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
    getCategoryById: async (req: Request, res: Response) => {
        try {
            const { ID } = req.params;
            const category = await Category.findOne({
                category_title: ID,
            });
            res.status(200).json({ message: category, code: 200 });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
    newCategory: async (req: Request, res: Response) => {
        try {
            const { category_title } = req.body;
            const category = await Category.create({
                category_title,
            });
            res.status(200).json({ message: category, code: 200 });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
    putCategory: async (req: Request, res: Response) => {
        try {
            const { _id } = req.params;
            const { category_title } = req.body;
            const category = await Category.findOneAndUpdate(
                {
                    _id,
                },
                {
                    category_title,
                }
            );
            res.status(200).json({
                message: `${category?.category_title} updated`,
                code: 200,
            });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
    deleteCategory: async (req: Request, res: Response) => {
        try {
            const { _id } = req.params;
            const category = await Category.findOneAndDelete({
                _id,
            });
            if (!category) {
                return res
                    .status(404)
                    .json({ message: `${category} not found`, code: 404 });
            } else {
                res.status(200).json({
                    message: `${category?.category_title} deleted`,
                    code: 200,
                });
            }
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
};
