import { Request } from "express";
import { UserModel } from "../../db/models";

const getUserByAll = async (email: string, name: string, phone: string) => {
  const user = await UserModel.findOne({
    email: email,
    name: name,
    phone: phone,
  });
  return user;
};

export const UpdateAll = async (req: Request) => {
  const { email, name, phone } = req.body;
  try {
    const user = await getUserByAll(email, name, phone);
    if (!user) {
      return "User not existed";
    }

    const update = await UserModel.updateOne(
      { email: user.email },
      { name: user.name },
      { phone: user.phone }
    );
    return update;
  } catch (error: any) {
    return error.message;
  }
};
