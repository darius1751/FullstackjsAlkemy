import { Category } from "./Category";
import { TypeMovement } from "./TypeMovement";
import { User } from "./User";

export interface Movement{
    id?:number;
    description?:string;
    balance?:number;
    createdAt?:string;
    typeMovement:TypeMovement;
    user?:User;
    category?:Category;
}