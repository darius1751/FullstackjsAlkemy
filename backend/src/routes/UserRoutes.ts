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
        this.getBalance = this.getBalance.bind(this);
    }
    public register(req:Request,res:Response):void{
        console.log(req.body);
        this.userService.register(req.body)
        .then((insert)=>{
            console.log(insert);
            res.send(insert);
        })
        .catch((e)=>{
            res.status(500).send(e);
        })
    }
    public login(req:Request,res:Response):void{
        this.userService.login(req.body)
        .then( v => {
            console.log(v);
            res.status(200).send(v);
            
                
        })
    }
    public getAll(req:Request,res:Response):void{
        this.userService.getAll()
        .then((users:User[])=>{
            res.send(users);
        })
    }
    public getBalance(req:Request,res:Response):void{
        this.userService.getBalance(parseInt(req.params.id))
        .then((balance)=> {
            res.send({balance})
        })
        .catch((err) => {
            res.status(500).send(err);
        })
    }
}