import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ensure } from "../middlewares/ensure.middleware";
import { userCreateSchema } from "../schemas";
import { auth } from "../middlewares/auth.middleware";

export const userRouter = Router();

const controller = new UserController();

userRouter.post("/", ensure.validBody(userCreateSchema), ensure.emailIsUnique, controller.create );
userRouter.get("/profile", auth.isAuthenticated, controller.retrieveUser )