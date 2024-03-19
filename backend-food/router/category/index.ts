import { Router } from "express";
import {
  CreateCategoryController,
  getCategoriesController,
  getCategoryController,
} from "../../controllers";

export const CategoryRouter = Router();

CategoryRouter.post("/category", CreateCategoryController);
CategoryRouter.get("/category", getCategoryController);
CategoryRouter.get("/categories", getCategoriesController);
