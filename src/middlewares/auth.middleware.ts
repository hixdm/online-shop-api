import { NextFunction, Request, Response } from "express";
import { UserRole } from "../utils/user.role";
import {UserPayload} from '../utils/token.generator'
import jwt from 'jsonwebtoken'


export const roleHandler = (role: UserRole) => {
    let roleList = [];
    if (role == UserRole.USER) {
        roleList.push(role);
    } else {
        roleList.push(UserRole.ADMIN, role);
    }

    return async(req:Request,res:Response,next:NextFunction)=>{
            let token:string
            let payload:UserPayload
            token = req.header("token") || ""
            if(!token){
                return res.status(401).json({
                    data:"token is missing."
                }) 
    }
    try {
        payload = await jwt.verify(token,process.env.SECRET) as UserPayload
    } catch (error) {
        
    }

};
