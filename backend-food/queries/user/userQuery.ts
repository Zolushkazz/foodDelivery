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
    return user;
  } catch (error: any) {
    console.log(error.message);
  }
};
