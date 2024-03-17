import { Response, Request } from "express";
import { ResetQuery } from "../../queries";
import { OtpChecker } from "../../queries/user/optCheck";

export const codeCheckController = async (req: Request, res: Response) => {
  try {
    const result = await OtpChecker(req);

    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
