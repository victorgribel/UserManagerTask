import { Router } from "express";
import { ensure } from "../middlewares";
import { TaskController } from "../controller";
import { taskCreateSchema } from "../database/schemas";

export const taskRouters = Router();
const controller = new TaskController();

taskRouters.post("" ,ensure.validBody(taskCreateSchema), controller.create);
taskRouters.get("", controller.read);
