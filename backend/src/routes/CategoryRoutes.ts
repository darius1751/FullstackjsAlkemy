import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

export class CategoryRoutes{
    private categoryService:CategoryService;
    constructor(){
        this.categoryService = new CategoryService();
        this.create = this.create.bind(this);
        this.getAllByUserId = this.getAllByUserId.bind(this);
    }
    public create(req:Request,res:Response):void{
        this.categoryService.create(req.body)
        .then(v=>{
            res.send(v);
        })
        .catch((e)=>{
            res.status(500).send(e);
        })
    }
    public getAllByUserId(req:Request,res:Response):void{
        let {userId} =  req.params;
        this.categoryService.getAllByUserId(parseInt(userId))
        .then((v)=>res.send(v))
        .catch(err=>res.status(500).send(err))
    }
}