import { z } from "zod";
import { sessionCreateSchema, sessionReturnSchema } from "../schemas";


type createSession = z.infer<typeof sessionCreateSchema>;
type returnSession = z.infer<typeof sessionReturnSchema>;


export { createSession, returnSession};