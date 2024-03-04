import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {

    private userService: UserService = new UserService();

    public create = async (req: Request, res: Response): Promise<Response> => {

        const newUser = await this.userService.create(req.body);

        return res.status(201).json(newUser);
    }

    public retrieveUser = async (req: Request, res: Response): Promise<Response> => {
        const userId = Number(res.locals.sub);

        const foundUser = await this.userService.retrieveUser(userId);

        return res.status(200).json(foundUser);

    }
}