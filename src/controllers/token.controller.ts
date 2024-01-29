import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { contants } from "../utils/constatns";

export const tokenController = {
  checkUserToken: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers["token"];
      if (!token) {
        return res.status(401).json({
          data: "token is missing.",
        });
      }
      await jwt.verify(
        token.toString(),
        contants.secret_user,
        (err: any, decode: any) => {
          if (err)
            return res.status(403).json({
              data: "forbidden",
            });
          next();
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).json({
        data: "Internal error",
      });
    }
  },
  checkAdminToken: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers["token"];
      if (!token) {
        return res.status(401).json({
          data: "token is missing.",
        });
      }
      await jwt.verify(
        token.toString(),
        contants.secret_admin,
        (err: any, decode: any) => {
          if (err)
            return res.status(403).json({
              data: "forbidden",
            });
          next();
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).json({
        data: "Internal error",
      });
    }
  },
};
