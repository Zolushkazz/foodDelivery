import { Request } from "express";
import { UserModel } from "../../db/models/user";
import { passwordHash } from "../../utils";

export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;
    console.log(name);
    const hashedPass = passwordHash(password);

    const user = await UserModel.create({
      name,
      email,
      phone,
      password: hashedPass,
    });

    const getUserByEmail = async (email: string) => {
      const userEmail = await UserModel.findOne({ email: email });
      return userEmail;
    };
    const checkUser = await getUserByEmail(user?.email);
    if (!checkUser) {
      throw new Error("Email is not existed");
    }
    return user;
  } catch (error: any) {
    return error.message;
  }
};
