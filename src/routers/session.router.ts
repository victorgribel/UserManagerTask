import { Router } from "express";
import { SessionController } from "../controllers/SessionController";


export const sessionRouter = Router();

const controller = new SessionController();

sessionRouter.post("/", controller.login);