import z from 'zod';
import { taskSchema, taskSchemaCreate, taskSchemaUpdate, taskWithCategorySchema } from '../schemas/task.schema';

export type Task = z.infer<typeof taskSchemaCreate>;
export type TaskSchema = z.infer<typeof taskSchema>;
export type TTaskUpdate = z.infer<typeof taskSchemaUpdate>;
export type TaskWithCategoryType = z.infer<typeof taskWithCategorySchema>;
