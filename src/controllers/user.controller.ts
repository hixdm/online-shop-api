import { Request, Response } from "express";
import { User } from "../models/User";
import { tokenGenUser } from "../utils/token.generator";
import bcrypt from "bcrypt";

export const userController = {
    getUser: async (req: Request, res: Response) => {
        try {
            const user = await User.find();
            res.status(200).json({
                message: user,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error,
                code: 500,
            });
        }
    },
    getUserById: async (req: Request, res: Response) => {
        const { id } = req.params;
        console.log(id);

        try {
            const user = await User.findOne({ mobile_number: id });
            if (user) {
                res.status(200).json({ message: user });
            } else {
                res.status(404).json({
                    message: `User with${id}not found.`,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error,
                code: 500,
            });
        }
    },
    getCurrentUser: async (req: Request, res: Response) => {
        try {
            const mobile = req.body.user;
            const user = await User.findOne({
                mobile_number: mobile,
            });
            res.status(200).json({
                user: user,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "Internal error.",
            });
        }
    },
    updateUser: async (req: Request, res: Response) => {
        try {
            const {
                name,
                email,
                mobile_number,
                password,
                national_ID,
                address,
            } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.findOneAndUpdate(
                { mobile_number: mobile_number },
                {
                    name: name,
                    email: email,
                    password: hashedPassword,
                    national_ID: national_ID,
                    address: address,
                }
            );
            if (user) {
                res.status(200).json({
                    message: `${user?.name} updated`,
                });
            } else {
                res.status(200).json({
                    message: `user not found`,
                });
            }
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                message: error.message,
                code: 500,
            });
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await User.findOne({ mobile_number: id });

            if (!user) {
                return res.status(404).json({
                    message: "User not found.",
                });
            } else {
                await User.deleteOne({ mobile_number: id });

                res.status(200).json({
                    message: `User ${user.name} deleted.`,
                });
            }
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                message: error.message,
                code: 500,
            });
        }
    },
};
