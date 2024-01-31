import { NextFunction, Request, Response } from "express";

const jwt = require("jsonwebtoken");

export const tokenController = {
  checkTokenAdmin: async (req:Request, res:Response, next:NextFunction) => {
    try {
      const token = req.headers["token"];
      if (!token) {
        return res.status(401).json({
          message: "token is missing",
          code: 401,
        });
      }
      await jwt.verify(token, process.env.SECRET_ADMIN, (error:any, decode:any) => {
        console.log(decode);
        if (error) {
          return res.status(403).json({
            message: "login is required",
            code: 403,
          });
        }
        if (decode.admin) {
          next();
        } else {
          return res.status(403).json({
            message: "admin is required",
            code: 403,
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error, code: 500 });
    }
  },
  checkToken: async (req:Request, res:Response, next:NextFunction) => {
    try {
      const token = req.headers["token"];
      if (!token) {
        return res.status(401).json({
          message: "token is missing",
          code: 401,
        });
      }
      await jwt.verify(token, process.env.SECRET, (error:any) => {
        if (error) {
          return res.status(403).json({
            message: "login is required",
            code: 403,
          });
        }
        next();
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error, code: 500 });
    }
  },
};

