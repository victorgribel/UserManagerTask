import { Router } from "express";
import { CategoryController } from "../controllers";
import { ensure } from "../middlewares/ensure.middleware"; 
import { createCategorySchema } from "../schemas";
import { auth } from "../middlewares/auth.middleware";

export const categoryRouter = Router();
const controller = new CategoryController();

categoryRouter.post("/", auth.isAuthenticated, ensure.validBody(createCategorySchema), controller.create);
categoryRouter.delete("/:id", auth.isAuthenticated, ensure.category, controller.delete);