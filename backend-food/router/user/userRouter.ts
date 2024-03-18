import express from "express";
import { VerifyToken, createUserController } from "../../controllers/user";
import { LoginController, ResetPassController } from "../../controllers";
import { updatePassController } from "../../controllers/user/updatePassCont";
import { codeCheckController } from "../../controllers/user/codeCheckController";

const userRouter = express.Router();

userRouter.post("/user/signup", createUserController);
userRouter.post("/login", LoginController);
userRouter.post("/resetPass", ResetPassController);
userRouter.post("/otpCheck", codeCheckController);
userRouter.post("/passUpdate", updatePassController);
userRouter.post("/users/refresh");
userRouter.post("/verify", VerifyToken);

export default userRouter;
