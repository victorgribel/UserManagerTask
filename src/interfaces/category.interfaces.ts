import { z } from "zod";
import { categorySchema, createCategorySchema } from "../schemas";

type CreateCategory = z.infer<typeof createCategorySchema>;

type ReturnCategory = z.infer<typeof categorySchema>;



export { CreateCategory, ReturnCategory };