import { z } from "zod";
import { userSchema } from "./user.schema";
import { userReturnSchema } from "./user.schema";


const sessionCreateSchema = userSchema.omit({id: true});


const sessionReturnSchema = z.object({
    accessToken: z.string(),
    user: userReturnSchema
});


export { sessionCreateSchema, sessionReturnSchema };