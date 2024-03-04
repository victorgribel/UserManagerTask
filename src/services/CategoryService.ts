
import { prisma } from "../database/prisma";
import { CreateCategory, ReturnCategory } from "../interfaces";
import { AppError } from "../errors";

export class CategoryService {

    public create = async (payload: CreateCategory, userId: number): Promise<ReturnCategory> => {

        const newCategory = await prisma.category.create({
             data: {
                ...payload,
                userId
             }})

        return newCategory;
    };

    public deleteOne = async (categoryId: number, userId: number) => {

        const currentCategory = await prisma.category.findFirst({where: {id: categoryId}});

        if(!currentCategory || currentCategory.userId !== userId){
            throw new AppError("Forbidden", 403)
        }

        const deleteCategory = await prisma.category.delete({ where: { id: categoryId, userId: userId } });

        return deleteCategory;
    };
}
