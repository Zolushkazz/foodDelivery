import { Request, Response } from "express";
import { tokenVerify } from "../../queries";

export const refreshController = async (req: Request, res: Response) => {
  try {
    const result = await tokenVerify(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
