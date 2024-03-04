import { z } from "zod";
import { taskCreateSchema, taskSchema, taskUpdateSchema, taskWithCategorySchema } from "../schemas";

type Task = z.infer<typeof taskSchema>;
type CreateTask = z.infer<typeof taskCreateSchema>;
type UpdateTask = z.infer<typeof taskUpdateSchema>;
type CategoryTaskSchema = z.infer<typeof taskWithCategorySchema >;

export { Task, CreateTask, UpdateTask, CategoryTaskSchema }