import { Response, Request } from "express";

import { UpdatePass } from "../../queries/user/updatePassword";

export const updatePassController = async (req: Request, res: Response) => {
  try {
    const result = await UpdatePass(req);
    console.log(result);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
