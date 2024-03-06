import express from "express";
import { createUserController } from "../../controllers/user/createUserController";

const userRouter = express.Router();

userRouter.post("/user/signup", createUserController);

export default userRouter;
