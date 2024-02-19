import { baseSchema } from "./base.schema";
import z from "zod";

const categorySchema = baseSchema.extend({
    name: z.string(),
    
    

})

const categoryCreateSchema = categorySchema.omit({
    id: true
}).nullish()


export { categoryCreateSchema, categorySchema }