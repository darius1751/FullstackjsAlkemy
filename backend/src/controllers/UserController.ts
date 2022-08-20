import { Router } from "express";
import { UserRoutes } from "../routes/UserRoutes";

export class UserController{
    public readonly routes:Router;
    private userRoutes:UserRoutes;
    constructor(){
        this.routes = Router();
        this.userRoutes = new UserRoutes();
        this.configRoutes = this.configRoutes.bind(this);
        this.configRoutes();
    }
    private configRoutes():void{
        this.routes.post('/register',this.userRoutes.register);
        this.routes.post('/login',this.userRoutes.login);
        this.routes.get('/getAll',this.userRoutes.getAll);
        this.routes.get('/getBalance/:id',this.userRoutes.getBalance);
    }
}