import { Request,Response } from "express";
import { AuthService } from "../secure/AuthService";

export class AuthRoutes{
    private authService:AuthService;
    constructor(){
        this.getToken = this.getToken.bind(this);
        this.verifyToken = this.verifyToken.bind(this);
        this.authService = new AuthService();
    }
    public getToken(req:Request,res:Response):void{
        res.status(200).send({token:this.authService.createToken(req.body)});
    }
    public verifyToken(req:Request,res:Response):void{
        this.authService.validateToken({authorization: req.headers.authorization})
        .then(v=>
            res.send(v)
        ).catch(e=>{
            res.status(401).send({code:401,message:'Invalid token'})
        })
    }
}