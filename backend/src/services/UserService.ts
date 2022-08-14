import { UserDB } from "../database/UserDB";
import { User } from "../model/User";
import { Credential } from "../model/Credential";
export class UserService{
    private userDB:UserDB;
    constructor(){
        this.userDB = new UserDB();
    }
    public async register(user:User):Promise<any>{
        return await this.userDB.register(user);
    }
    public async login(credential:Credential):Promise<User>{
        return await this.userDB.login(credential);
    }
    public async getAll():Promise<User[]>{
        return await this.userDB.getAll();
    }
}