import { baseSchema } from "./base.schema";
import z from "zod";
import { categoryCreateSchema,} from "./category.schema";

const taskSchema = baseSchema.extend({
    title: z.string(),
    content: z.string(),
    finished: z.boolean(),
    categoryId: z.number(),
    category: categoryCreateSchema.nullish().optional()
})

const taskCreateSchema = taskSchema.omit({id : true}).extend({
    category: categoryCreateSchema.optional(),
})

const taskUpdateSchema =  taskCreateSchema.partial()

const taskReturnSchema = taskSchema;


export { taskCreateSchema, taskUpdateSchema, taskReturnSchema, taskSchema }