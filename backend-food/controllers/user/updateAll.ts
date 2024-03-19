import { Response, Request } from "express";
import { UpdateAll } from "../../queries/user/updateAll";

export const updateAllController = async (req: Request, res: Response) => {
  try {
    const result = await UpdateAll(req);
    console.log(result);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
