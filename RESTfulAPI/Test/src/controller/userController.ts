import {Request, Response} from "express";
import userService from "../service/userService";

const session = require('express-session');

class UserController {

    private userService;

    constructor() {
        this.userService = userService;
    }

    register = async (req: Request, res: Response) => {
        await this.userService.addUser(req.body);
        res.status(201).json('Create User Success');
    }

    login = async (req: Request, res: Response) => {
        let responseCheck = await this.userService.checkUser(req.body);
        res.status(200).json(responseCheck);
    }

}

export default new UserController();