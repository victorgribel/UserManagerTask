import { Router } from "express";
import { TaskController } from "../controllers";
import { ensure } from "../middlewares/ensure.middleware";
import { taskCreateSchema, taskUpdateSchema } from "../schemas/task.schema";
import { auth } from "../middlewares/auth.middleware";


export const taskRouter = Router();

const controller = new TaskController();

taskRouter.post("/", auth.isAuthenticated, ensure.validBody(taskCreateSchema), ensure.categoryIdExists, controller.create);

taskRouter.get("/", auth.isAuthenticated, controller.read);

taskRouter.get("/:id", auth.isAuthenticated, ensure.taskIdExists, controller.retrieve);

taskRouter.patch("/:id", auth.isAuthenticated, ensure.taskIdExists, ensure.categoryIdExists, ensure.validBody(taskUpdateSchema), controller.update);

taskRouter.delete("/:id", auth.isAuthenticated, ensure.taskIdExists, controller.delete);

