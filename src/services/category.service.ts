import { injectable } from 'tsyringe';
import { prisma } from '../database/prisma';
import { Category, CategoryData } from '../interfaces/category.interface';

@injectable()
export class CategoryService {
   create = async (data: CategoryData): Promise<Category> => {
      const category = await prisma.category.create({
         data
      });
      return category;
   };

   delete = async (id: number) => {
      const category = await prisma.category.delete({ where: { id } });
      return category;
   };
}
