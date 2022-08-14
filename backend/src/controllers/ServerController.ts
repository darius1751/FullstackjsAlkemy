import Express, { Application } from "express";
import cors from 'cors';
import morgan from "morgan";
import dotenv from 'dotenv';
import { IndexController } from "./IndexController";
import { AuthController } from "./AuthController";
import { UserController } from "./UserController";
import { CategoryController } from "./CategoryController";
import { MovementController } from "./MovementController";
export class ServerController{
    private app:Application;
    private indexController:IndexController;
    private authController:AuthController;
    private userController:UserController;
    private categoryController:CategoryController;
    private movementController:MovementController;
    constructor(){
        this.app = Express();
        this.indexController = new IndexController();
        this.authController = new AuthController();
        this.userController = new UserController();
        this.categoryController = new CategoryController();
        this.movementController = new MovementController();
        this.useResources();
        this.createRoutes();
        
    }
    private useResources():void{
        dotenv.config();
        this.app.use(morgan('dev'));
        this.app.use(Express.json());
        this.app.use(cors());
        this.app.set('port',process.env.PORT || 8080);
    }
    private createRoutes():void{
        this.app.use('',this.indexController.routes);
        this.app.use('/auth/',this.authController.routes);
        this.app.use('/user/',this.userController.routes);
        this.app.use('/category/',this.categoryController.routes);
        this.app.use('/movement/',this.movementController.routes);
    }
    public start():void{
        this.app.listen(this.app.get('port'),() => {
            console.log(`Run Server in port ${this.app.get('port')}`);
        });
    }
}