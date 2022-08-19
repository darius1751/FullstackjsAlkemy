import { User } from "./User";

export interface Category{
    id?:number;
    name:string;
    createdAt?:string;
    user?:User;
}