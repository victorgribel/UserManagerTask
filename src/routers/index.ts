import express, { Application, json } from "express";
import { taskRouters } from "./task.routers";
import helmet from "helmet";

export const app: Application = express();

app.use(helmet());
app.use(json());
app.use("/tasks", taskRouters);
