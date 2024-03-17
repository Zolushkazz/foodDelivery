import { Request, Response } from "express";
import { tokenVerify } from "../../queries/user/tokenQuery";

export const VerifyToken = async (req: Request, res: Response) => {
  try {
    const result = await tokenVerify(req, res);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
