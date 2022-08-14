import { Request,Response } from "express";
export class IndexRoutes{
    public welcome(req:Request, res:Response):void{
        
        res.status(200).send({message:'Welcome to the API Rest'});
        
    }
}