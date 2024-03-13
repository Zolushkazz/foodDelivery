import { Request } from "express";
import { UserModel } from "../../db/models/user";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const OptChecker = async (req: Request) => {
  const { otp, email } = req.body;
  try {
    const user = await getUserByEmail(email);

    if (user?.otp === otp) {
      await UserModel.updateOne({ email: user?.email }, { $set: { otp: "" } });
      return "success";
    } else {
      return "invalid code";
    }
  } catch (er: any) {
    throw new Error(er.message);
  }
};
