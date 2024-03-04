import { Request, Response } from "express";
import { SessionService } from "../services";

export class SessionController {
    private sessionService = new SessionService();

    public login = async (req: Request, res: Response): Promise<Response> => {

        const token = await this.sessionService.login(req.body)

        return res.status(200).json(token); 

    }
}