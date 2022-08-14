import { Router } from "express";
import { IndexRoutes } from "../routes/IndexRoutes";

export class IndexController{
    public readonly routes:Router;
    private indexRoutes:IndexRoutes;
    constructor(){
        this.routes = Router();
        this.indexRoutes = new IndexRoutes();
        this.configRoutes();
    }
    private configRoutes():void{
        this.routes.get('',this.indexRoutes.welcome);
    }
}