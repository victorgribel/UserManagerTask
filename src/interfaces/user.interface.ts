import { z } from "zod";
import { userSchema, userCreateSchema, userReturnSchema } from "../schemas";

type UserS = z.infer<typeof userSchema>;
type UserCreate = z.infer<typeof userCreateSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;

export { UserS, UserCreate, UserReturn};