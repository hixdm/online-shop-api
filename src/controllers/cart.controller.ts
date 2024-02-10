import { Cart } from "../models/Cart";
import { Request, Response }  from "express";

export const cartController={
    addProductToCart: async (req: Request, res: Response) => {
        try {
            const {product_id}=req.body
            const cart=await Cart.updateOne({
                    user_id:req
            })
            res.status(200).json({message:cart})
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    },
    deleteProductFromCart:async(req:Request,res:Response)=>{
        try {
            const {_id}=req.params
            const cart=await Cart.findOneAndDelete({_id})
            console.log(cart)
            res.status(200).json({message:cart})
        } catch (error:any) {
            console.log(error);
            res.status(500).json({ message: error.message, code: 500 });
        }
    }
}