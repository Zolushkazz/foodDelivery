import { Router } from "express";
import { createOrderController } from "../../controllers/order";

export const OrderRouter = Router();

OrderRouter.post("/order", createOrderController);
