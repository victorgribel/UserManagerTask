import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class HandleErrorMiddleware{
    public static execute(error: Error, req: Request, res: Response, next: NextFunction): Response {
        if(error instanceof ZodError){
            return res.status(400).json({ message: error.errors });
            
        }
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const handleErrors = HandleErrorMiddleware.execute