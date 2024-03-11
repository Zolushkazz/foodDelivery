import { Response, Request } from "express";
import { UserModel } from "../../db/models/user";
import { compareHash, tokenGenerate } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const LoginQuery = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordTrue = await compareHash(password, user.password);

  if (!isPasswordTrue) {
    throw new Error("Email or password is wrong");
  }

  const token = await tokenGenerate(user._id.toString());
  return token;
};
