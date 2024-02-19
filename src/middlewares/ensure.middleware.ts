import { NextFunction, Request, Response,  } from "express";
import { AnyZodObject } from "zod";

class EnsureMiddleware{
    public validBody = (schema: AnyZodObject) =>(req: Request, res: Response, next: NextFunction): void =>{
        req.body = schema.parse(req.body);
        return next();
    }
}

export const ensure = new EnsureMiddleware()