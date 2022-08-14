import {Request,Response} from 'express';
import { MovementService } from '../services/MovementService';
export class MovementRoutes{
    private movementService:MovementService;
    constructor(){
        this.movementService = new MovementService();
        this.getAllByUserId = this.getAllByUserId.bind(this);
        this.create = this.create.bind(this);
    }
    public getAllByUserId(req:Request,res:Response):void{
        this.movementService.getAllByUserId(parseInt(req.params.userId))
        .then(v=>{
            console.log(v) 
            res.send(v);
        }).catch(ex=>{
            res.status(500).send(ex);
        })
    }
    public create(req:Request,res:Response){
        this.movementService.create(req.body)
        .then((v)=>{
            console.log(v);
            res.send(v);
        })
        .catch((ex)=>{
            res.status(500).send(ex);
        })
    }
}