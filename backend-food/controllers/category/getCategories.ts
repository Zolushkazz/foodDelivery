import { Request, Response } from "express";
import { getCategoriesQuery } from "../../queries";

export const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const result = await getCategoriesQuery();
    res.send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
