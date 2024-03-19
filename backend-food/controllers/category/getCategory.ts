import { Request, Response } from "express";
import { getCategoryQuery } from "../../queries";

export const getCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await getCategoryQuery(req);
    res.send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
