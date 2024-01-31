import { Request, Response } from "express";
import { Product } from "../models/Product";

export const productController = {
    getProducts: async (req: Request, res: Response) => {
        try {
            const products = await Product.find().populate("category");
            res.status(200).json({ message: products, code: 200 });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
    getProductById: async (req: Request, res: Response) => {
        try {
            const { ID } = req.params;
            console.log(ID);
            const product = await Product.findOne({
                productID: ID,
            });
            res.status(200).json({ message: product, code: 200 });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
    newProduct: async (req: Request, res: Response) => {
        try {
            
            const {
                product_title,
                product_price,
                product_inventory,
                product_description,
                category,
            } = req.body;
            const product = await Product.create({
                product_title,
                product_price,
                product_inventory,
                product_description,
                category,
            });
            res.status(200).json({ message: product, code: 200 });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
    putProduct: async (req: Request, res: Response) => {
        try {
            const {
                productName,
                productID,
                productCategory,
                productdescription,
                productprice,
                productInventory,
                numberOfSales,
            } = req.params;
            const product = await Product.findOneAndUpdate(
                {
                    productID: productID,
                },
                {
                    productName: productName,
                    productID: productID,
                    productCategory: productCategory,
                    productdescription: productdescription,
                    productprice: productprice,
                    productInventory: productInventory,
                    numberOfSales: numberOfSales,
                }
            );
            res.status(200).json({
                message: `${product?.product_title} updated`,
                code: 200,
            });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
    deleteProduct: async (req: Request, res: Response) => {
        const { productID } = req.params;
        const product = await Product.findOneAndDelete({
            productID: productID,
        });
        if (!product) {
            return res
                .status(404)
                .json({ message: `${productID} not found`, code: 404 });
        }
        res.status(200).json({
            message: `${product.product_title} deleted`,
            code: 200,
        });
        try {
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
};
