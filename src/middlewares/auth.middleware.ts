import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { verify, JwtPayload  } from "jsonwebtoken";

class AuthMiddleware {

    public isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {

        const { authorization } = req.headers;

        if (!authorization) throw new AppError("Token is required", 401);

        const [_, token] = authorization.split(" ");

        if (!token) throw new AppError("Token is required", 401);

        const { sub } = verify(token, process.env.JWT_SECRET!) as JwtPayload;

        res.locals = { ...res.locals, sub };
        return next();
    }
}

export const auth = new AuthMiddleware();
