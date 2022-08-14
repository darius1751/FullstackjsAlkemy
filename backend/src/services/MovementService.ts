import { MovementDB } from "../database/MovementDB";
import { Movement } from "../model/Movement";

export class MovementService{
    private movementDB:MovementDB;
    constructor(){
        this.movementDB = new MovementDB;
    }
    public async getAllByUserId(id:number):Promise<any>{
        return await this.movementDB.getAllByUserId(id);
    }
    public async create(movement:Movement):Promise<Movement>{
        return await this.movementDB.create(movement);
    }
}