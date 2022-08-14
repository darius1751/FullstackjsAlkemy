import { CategoryDB } from "../database/CategoryDB";
import { Category } from "../model/Category";
export class CategoryService{
    private readonly categoryDB:CategoryDB;
    constructor(){
        this.categoryDB = new CategoryDB();
    }
    public async create(category:Category):Promise<any>{
        return this.categoryDB.create(category);
    }
    public async getAllByUserId(userId:number):Promise<Category[]>{
        return this.categoryDB.getAllByUserId(userId);
    }
}