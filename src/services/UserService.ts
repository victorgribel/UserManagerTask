import {compare, hash } from "bcryptjs";
import { prisma } from "../database/prisma";
import { UserS, UserCreate, UserReturn } from "../interfaces";
import { userReturnSchema } from "../schemas";

export class UserService {

    public create = async( payload: UserCreate): Promise<UserReturn> => {

        payload.password = await hash(payload.password, 10);

        const newUser = await prisma.user.create({
            data: payload
        })

        return userReturnSchema.parse(newUser);
    }

    public retrieveUser = async (userId: number): Promise<UserReturn> => {

        const foundUser = await prisma.user.findFirst({where: {id: userId }})

        return userReturnSchema.parse(foundUser);
    }

}

