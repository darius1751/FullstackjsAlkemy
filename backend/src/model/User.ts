import { Credential } from "./Credential";
export interface User{
    id?:number;
    name?:string;
    birthday?:string;
    credential?:Credential;
}
