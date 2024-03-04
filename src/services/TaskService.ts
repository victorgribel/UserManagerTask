import { prisma } from "../database/prisma";
import { AppError } from "../errors";
import { CreateTask, UpdateTask, Task, CategoryTaskSchema } from "../interfaces";
import { task } from "../tests/mocks/tasks.mocks";

export class TaskService {

    public create = async (payload: CreateTask, userId: number): Promise<Task> => {

        const newTask = await prisma.task.create({
            data: {
                ...payload,
                userId
            }
        });

        return newTask;
    }

    public read = async (userId: number, search?: string): Promise<CategoryTaskSchema[] | null> => {
        if (search) {
            const foundTasks = await prisma.task.findMany({
                where: {
                    userId: userId,
                    category: {
                        name: {
                            contains: search
                        },
                        userId: userId,
                    },
                },
                include: {
                    category: true,
                },
            });
            return foundTasks;
        }

        const tasksOwnedByUser = await prisma.task.findMany({
            where: { userId: userId },
            include: { category: true }
        });

        return tasksOwnedByUser;
    }

    public retrieve = async (userId: number): Promise<CategoryTaskSchema | null> => {

        const foundTask = await prisma.task.findFirst({
            where: { id: userId },
            include: {
                category: true
            }
        });

        return foundTask;
    }

    public update = async (userId: number, taskId: number, data: UpdateTask): Promise<Task> => {

        const currentTask = await prisma.task.findFirst({ where: { id: taskId } });

        if (!currentTask || currentTask.userId !== userId) {
            throw new AppError("Forbidden", 403)
        }

        const updateTask = await prisma.task.update({ where: { id: taskId }, data: { ...data } });

        return updateTask;

    }

    public delete = async (userId: number, taskId: number) => {

        const currentTask = await prisma.task.findFirst({ where: { id: taskId } });

        if (!currentTask || currentTask.userId !== userId) {
            throw new AppError("Forbidden", 403)
        }
        

        const deleteTask = await prisma.task.delete({
            where: {
                id: taskId,
                userId: userId
            }
        });

        return deleteTask;
    }
};
