import { Response, Request, response, request } from "express";
import { UserModel } from "../../db/models/user";
import { compareHash } from "../../utils";
import jwt from "jsonwebtoken";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const LoginQuery = async (req: Request) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordTrue = await compareHash(password, user.password);
    console.log(isPasswordTrue);

    if (!isPasswordTrue) {
      throw new Error("Email or password is wrong");
    }

    const token = await jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET || "secret",
      {
        expiresIn: "1d",
      }
    );
    return token;
  } catch (error: any) {
    throw new Error("Login failed");
  }
};
