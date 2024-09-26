import envConfig from "@/configs/env";
import jwt from "jsonwebtoken";

const generateToken = (id: number) => {
  return jwt.sign({ id }, envConfig.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export default generateToken;
