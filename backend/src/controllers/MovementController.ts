import { Router } from "express";
import { MovementRoutes } from "../routes/MovementRoutes";

export class MovementController{
    public readonly routes:Router;
    private movementRoutes:MovementRoutes;
    constructor(){
        this.routes = Router();
        this.movementRoutes = new MovementRoutes();
        this.configRoutes = this.configRoutes.bind(this);
        this.configRoutes();
        
    }
    private configRoutes():void{
        this.routes.get('/getAll/:userId',this.movementRoutes.getAllByUserId);
        this.routes.post('/create/',this.movementRoutes.create);
    }
}