import { Request, Response } from "express";
import { User } from "../models/User";
import { tokenGenUser } from "../utils/token.generator";
import bcrypt from "bcrypt";

export const authController = {
  registerUser: async (req: Request, res: Response) => {
    try {
      const { name, email, mobile_number, password, national_ID, address } =
        req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const existingUser = await User.findOne({
        mobile_number
      });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "This number already has an account!" });
      }
      const token = await tokenGenUser(mobile_number);
      const user = await User.create({
        name: name,
        email: email,
        mobile_number: mobile_number,
        password: hashedPassword,
        national_ID: national_ID,
        address: address,
        token: token,
      });
      // @ts-ignore
      res.status(201).json({ message: { data: user.noPwd } });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ message: error.message, code: 500 });
    }
  },
  loginUser: async (req: Request, res: Response) => {
    const { mobile_number, password } = req.body;
    req.body.user = req.body.mobile_number
    try {
      const user = await User.findOne({
        mobile_number: mobile_number,
      });
      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
      } else {
        // @ts-ignore
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          res.status(200).json({
            message: { data: user },
          });
        } else {
          res.send("password is incorrect");
        }
      }
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
};
