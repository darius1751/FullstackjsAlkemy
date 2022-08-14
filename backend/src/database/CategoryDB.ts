import { Connection } from "promise-mysql";
import { ConnectionDB } from "../connection/ConnectionDB";
import { Category } from "../model/Category";

export class CategoryDB{
    private readonly connectionDB:ConnectionDB;
    constructor(){
        this.connectionDB = new ConnectionDB();
        this.create = this.create.bind(this);
    }
    public async create(category:Category):Promise<any>{
        try{
            const connection:Connection = await this.connectionDB.open();
            await connection.query('INSERT INTO categories_personal(name,person_id) VALUES(?,?)',[category.name,category.user?.id]);
            let newCategory:any  = await connection.query('SELECT * FROM categories_personal WHERE name = ? AND person_id',[category.name,category.user?.id]);
            return newCategory;
        }catch(ex){
            throw {id:-1};
        }
        
    }
    public async getAllByUserId(id:number):Promise<any>{
        
        try{
            const connection:Connection = await this.connectionDB.open();
            const data = await connection.query('SELECT id,name,created_at AS createdAt FROM categories_personal WHERE person_id = ?',[id])
            connection.destroy();
            return data;
        }catch(ex){
            console.log(ex);
            throw []
        }
    }
}