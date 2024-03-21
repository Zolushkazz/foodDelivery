import { Request, Response } from "express";
import { orderQuery } from "../../queries/order";

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const result = await orderQuery(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
