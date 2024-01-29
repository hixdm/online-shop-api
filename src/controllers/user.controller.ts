import { Request, Response } from "express";
import { User } from "../models/User";

export const userController={
registerUser:async(req:Request,res:Response)=>{
    try {
        const {name,
            email,
            mobile_number,
            password,
            token,
            national_ID,
            address,
            status}=req.body;

            

    } catch (error:any) {
        
    }
},
}