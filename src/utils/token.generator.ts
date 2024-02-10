import jwt from "jsonwebtoken";

export interface UserPayload {
    mobile: string;
}

export const tokenGenUser = async (payload: UserPayload) => {
    const secret = process.env.SECRET || "secret";
    const token = await jwt.sign(payload, secret, {
        expiresIn: "7d",
    });
    return token;
};
