import jwt from "jsonwebtoken";
import { contants } from "./constatns";


export const tokenGenaratorUser = async (email: string) => {
  const token: string = await jwt.sign({ email }, contants.secret_admin, {
    expiresIn: "1d",
  });
  return token;
};
export const tokenGenaratorAdmin = async (email: string) => {
  const token: string = await jwt.sign({ email }, contants.secret_admin, {
    expiresIn: "1d",
  });
  return token;
};
