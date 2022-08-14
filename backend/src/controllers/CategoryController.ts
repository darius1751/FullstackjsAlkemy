import { Router } from "express";
import { CategoryRoutes } from "../routes/CategoryRoutes";

export class CategoryController{
    public readonly routes:Router;
    private categoryRoutes:CategoryRoutes;
    constructor(){
        this.routes = Router();
        this.categoryRoutes = new CategoryRoutes();
        this.configRoutes = this.configRoutes.bind(this);
        this.configRoutes();
        
    }
    private configRoutes():void{
        this.routes.post('/create',this.categoryRoutes.create);
        this.routes.get('/getAll/:userId',this.categoryRoutes.getAllByUserId);
    }
}