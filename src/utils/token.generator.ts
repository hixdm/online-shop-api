import jwt from "jsonwebtoken";
export const tokenGenUser = async (
  email: string,
) => {
  const secret = process.env.SECRET || "secret";
  const token = await jwt.sign({email},secret,
    {
      expiresIn: "7d",
    }
  );
  return token;
};
export const tokenGenAdmin = async (
    email: string,
  ) => {
    const secret = process.env.SECRET || "secret";
    const token = await jwt.sign({email},secret,
      {
        expiresIn: "7d",
      }
    );
    return token;
  };
