import { TaskServices } from "../services/taskServices";
import { Request, Response } from "express";

export class TaskController{
    private TaskServices = new TaskServices();

    public create = async (req: Request, res: Response): Promise<Response> => {
        const newTask = await this.TaskServices.create(req.body);
        return res.status(201).json(newTask);
    }
    
    public read = async (_: Request, res: Response): Promise<Response> => {
        const allTasks = await this.TaskServices.read();
        return res.status(200).json(allTasks);
    }
}