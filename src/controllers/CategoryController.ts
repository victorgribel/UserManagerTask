import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

export class CategoryController {

    private categoryService: CategoryService = new CategoryService();

    public create = async (req:Request, res:Response): Promise<Response> => {

        const id = Number(res.locals.sub);
        console.log(id)

        const newCategory = await this.categoryService.create(req.body, id);

        return res.status(201).json(newCategory);
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {

    const userId = Number(res.locals.sub);

    const categoryId = Number(req.params.id);

    const deleteCategory = await this.categoryService.deleteOne(categoryId, userId);

    return res.status(204).json(deleteCategory);
    }


}