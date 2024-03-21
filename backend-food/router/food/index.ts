import { Router } from "express";
import {
  GetFoodsController,
  CreateFoodController,
} from "../../controllers/food";

export const FoodRouter = Router();

FoodRouter.post("/get/foods", GetFoodsController);
FoodRouter.post("/create/food", CreateFoodController);
