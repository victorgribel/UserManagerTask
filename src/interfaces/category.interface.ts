import { z } from 'zod';
import { categorySchema, categorySchemaCreate } from '../schemas/category.schema';

export type Category = z.infer<typeof categorySchema>;
export type CategoryData = z.infer<typeof categorySchemaCreate>;
