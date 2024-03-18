import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../db/models";

export const passwordHash = (password: string) => {
  const salt = bcrypt.genSaltSync(15);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
};

export const compareHash = async (password: string, hashedPassword: string) => {
  const isPasswordRight = bcrypt.compareSync(password, hashedPassword);

  return isPasswordRight;
};

// export const tokenGenerate = async (userId: string, res: Response) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET || "secret", {
//     expiresIn: "1d",
//   });
//   res.status(200).json({ token });
// };
