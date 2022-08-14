import { Router } from "express";
import { AuthRoutes } from "../routes/AuthRoutes";

export class AuthController{
    readonly routes:Router;
    private authRoutes:AuthRoutes;
    constructor() {
        this.routes = Router();
        this.authRoutes = new AuthRoutes()
        
        this.configRoutes();
    }
    private configRoutes():void{
        this.routes.post('/createToken',this.authRoutes.getToken);
        this.routes.post('/verifyToken',this.authRoutes.verifyToken);   
    }
}