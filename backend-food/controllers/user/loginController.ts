import { Response, Request } from "express";
import { LoginQuery } from "../../queries";

export const LoginController = async (req: Request, res: Response) => {
  try {
    const result = await LoginQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
