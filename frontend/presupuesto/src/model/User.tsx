import { Movement } from "./Movement";

export interface User{
    id?:number;
    email?:string;
    name?:string;
    birthday?:string;
    password?:string;
    balance?:number;
    movements?:Movement[];
}