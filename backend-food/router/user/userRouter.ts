import express from "express";
import { createUserController } from "../../controllers/user/createUserController";
import { LoginController } from "../../controllers";

const userRouter = express.Router();

userRouter.post("/user/signup", createUserController);
userRouter.post("/login", LoginController)

export default userRouter;
