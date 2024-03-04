import {z} from "zod";


const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    userId: z.number().positive()
})

const createCategorySchema = categorySchema.omit({ id: true, userId: true});


export { categorySchema, createCategorySchema};