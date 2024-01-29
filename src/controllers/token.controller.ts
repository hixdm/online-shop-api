import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

export const tokenController = {
  checkToken: async (req:Request, res:Response, next:NextFunction) => {
    try {
      const token = req.headers["token"];
      if (!token) {
        return res.status(401).json({
          message: "token is missing",
          code: 401,
        });
      }
      await jwt.verify(token.toString(), process.env.SECRET||"", (error:any) => {
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

