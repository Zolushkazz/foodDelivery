import jwt, { Secret, GetPublicKeyOrSecret } from "jsonwebtoken";
import { Response, Request, RequestHandler } from "express";
import { UserModel } from "../../db/models/user";

type Type = {
  _id: string;
  iat: number;
  exp: number;
};

export const tokenVerify: RequestHandler = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("Token is not provided");
      return;
    }

    const secret = process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret;

    console.log(secret);

    const decoded = jwt.verify(token, secret) as unknown;

    const id = decoded as Type;

    console.log(id);

    const getUserByID = async (id: any) => {
      const user = await UserModel.findOne({ _id: id });
      return user;
    };

    const user = await getUserByID(id?._id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
