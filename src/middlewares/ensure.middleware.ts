import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../errors";

class EnsureMiddleware {
    public validBody = (schema: AnyZodObject) => (req: Request, _: Response, next: NextFunction): void => {
        req.body = schema.parse(req.body);
        return next();
    }

    public categoryIdExists = async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (req.body.categoryId) {
                const category = req.body.categoryId;

                const searchCategory = await prisma.category.findFirst({
                    where: {
                        id: category
                    }
                });
                if (!searchCategory) {
                    return res.status(404).json({ message: 'Category not found' });
                }
            }
            next();
        } catch (error) {
            return res.status(500).json(error)
        };
    };

    public taskIdExists = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const params = Number(req.params.id);
            const searchId = await prisma.task.findFirst({ where: { id: params } });

            if (!searchId) {
                return res.status(404).json({ message: 'Task not found' });
            }

            next();
        } catch (error) {
            return res.status(500).json(error);
        }
    };



    public category = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const params = Number(req.params.id);
            const searchId = await prisma.category.findFirst({ where: { id: params } });

            if (!searchId) {
                return res.status(404).json({ message: 'Task not found' });
            }

            next();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    public emailIsUnique = async (req: Request, res: Response, next: NextFunction) => {

        const { email } = req.body;

        if (!email) {
            return next();
        }

        const foundUser = await prisma.user.findFirst({ where: { email } });

        if (foundUser) {
            throw new AppError("This email is already registered!", 409)
        }

        return next();
    }
}

export const ensure = new EnsureMiddleware();

