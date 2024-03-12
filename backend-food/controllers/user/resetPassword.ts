import { Response, Request } from "express";
import { ResetQuery } from "../../queries";

export const ResetPassController = async (req: Request, res: Response) => {
  try {
    const result = await ResetQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
