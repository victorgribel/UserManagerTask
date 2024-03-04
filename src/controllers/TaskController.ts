import { Request, Response } from "express";
import { TaskService } from "../services/index";

export class TaskController {

    private taskService: TaskService = new TaskService();

    public create = async (req: Request, res: Response): Promise<Response> => {

        const id = Number(res.locals.sub);
        const newTask = await this.taskService.create(req.body, id);

        return res.status(201).json(newTask);
    };

    public read = async (req: Request, res: Response): Promise<Response> => {

        const { category } = req.query;
        const id = Number(res.locals.sub);


        const allTasks = await this.taskService.read(id, category as string);

        
        return res.status(200).json(allTasks);
    };

    public retrieve = async (req: Request, res: Response): Promise<Response> => {

        const taskId = Number(req.params.id);

        const retrievedTask = await this.taskService.retrieve(taskId);


        return res.status(200).json(retrievedTask);
    };

    public update = async (req: Request, res: Response): Promise<Response> => {

        const userId = Number(res.locals.sub);
        const taskId = Number(req.params.id);

        const body = req.body;
        
        const updatedTask = await this.taskService.update(userId, taskId, body)

        return res.status(200).json(updatedTask);
    };

    public delete = async (req: Request, res: Response): Promise<Response> => {

        const taskId = Number(req.params.id);
        const userId = Number(res.locals.sub);
        

        const deleteTask = await this.taskService.delete(userId, taskId);

        return res.status(204).json(deleteTask);
    };
}