import express from "express";
import {
  VerifyToken,
  createUserController,
  refreshController,
} from "../../controllers/user";
import { LoginController, ResetPassController } from "../../controllers";
import { updatePassController } from "../../controllers/user/updatePassCont";
import { codeCheckController } from "../../controllers/user/codeCheckController";
import { updateAllController } from "../../controllers/user/updateAll";

const userRouter = express.Router();

userRouter.post("/user/signup", createUserController);
userRouter.post("/login", LoginController);
userRouter.post("/resetPass", ResetPassController);
userRouter.post("/otpCheck", codeCheckController);
userRouter.post("/passUpdate", updatePassController);
userRouter.post("/users/refresh", refreshController);
userRouter.post("/verify", VerifyToken);
userRouter.post("/updateAll", updateAllController);

export default userRouter;
