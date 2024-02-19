import { taskReturnSchema } from "../database/schemas";
import { prisma } from "../database/prisma";
import { taskCreate, taskReturn } from "../interfaces";
export class TaskServices {
    public create = async ({ category, ...payload }: taskCreate): Promise<taskReturn> => {
        if (!category) {
            const newTask = await prisma.task.create({ data : payload });
            return taskReturnSchema.parse(newTask);
        }

        const { id } = await prisma.category.create({ data: category });
        const newTask = await prisma.task.create({
            data: {
                ...payload,
                categoryId: id,},
        });

        return taskReturnSchema.parse(newTask);
    }
    public read = async (): Promise<Array<taskReturn>> => {
        const allTasks = await prisma.task.findMany({ include: { category: true } });
        return taskReturnSchema.array().parse(allTasks);
    }
    

}