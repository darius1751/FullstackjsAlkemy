import { Credential } from "./Credential";
import { Movement } from "./Movement";
export interface User{
    id?:number;
    balance?:number;
    name?:string;
    birthday?:string;
    credential?:Credential;
    movements?:Movement[];
}
