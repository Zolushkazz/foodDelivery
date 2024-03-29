import { Response, Request } from "express";
import { getFoodsQuery } from "../../queries";

export const GetFoodsController = async (req: Request, res: Response) => {
  try {
    const allFoods = await getFoodsQuery(req);
    res.status(200).send(allFoods);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
