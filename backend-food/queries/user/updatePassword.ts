import { Request } from "express";
import { UserModel } from "../../db/models/user";
import { passwordHash } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const UpdatePass = async (req: Request) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return "User not existed";
    }
    const hashedPass = passwordHash(password);

    const updatePass = await UserModel.updateOne(
      { email: user.email },
      { $set: { password: hashedPass } }
    );
  } catch (error: any) {
    return error.message;
  }
};
