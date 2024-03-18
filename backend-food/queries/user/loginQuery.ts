import { Response, Request, response, request } from "express";
import { UserModel } from "../../db/models/user";
import { compareHash } from "../../utils";
import jwt from "jsonwebtoken";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const LoginQuery = async (req: Request) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    console.log(user);

    if (!user) {
      throw new Error("User not found");
    }
    console.log(email);

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
    console.log("errr");

    throw new Error(error.message);
  }
};
