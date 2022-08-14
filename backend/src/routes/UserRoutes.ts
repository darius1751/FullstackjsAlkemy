import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { User } from "../model/User";
export class UserRoutes{
    private userService:UserService;
    constructor(){
        this.userService = new UserService();
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.getAll = this.getAll.bind(this);
    }
    public register(req:Request,res:Response):void{
        this.userService.register(req.body)
        .then((insert)=>{
            console.log(insert);
            res.send(insert);
        })
    }
    public login(req:Request,res:Response):void{
        this.userService.login(req.body)
        .then(v=>{
            console.log(v);
            res.send(v);
        })
    }
    public getAll(req:Request,res:Response):void{
        this.userService.getAll()
        .then((users:User[])=>{
            res.send(users);
        })
    }
}