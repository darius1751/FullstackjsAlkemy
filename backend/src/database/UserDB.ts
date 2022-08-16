import { Connection } from "promise-mysql";
import { ConnectionDB } from "../connection/ConnectionDB";
import { User } from "../model/User";
import { Credential } from "../model/Credential";
export class UserDB{
    private connectionDB:ConnectionDB;
    constructor(){
        this.connectionDB = new ConnectionDB();
    }
    public async register(user:User):Promise<any>{
        const connection:Connection =  await this.connectionDB.open();
        await connection.query('CALL create_credential(?,?);',[user.credential?.email,user.credential?.password]);
        let credentialId = (await connection.query('SELECT id FROM credential WHERE email = ?',[user.credential?.email]))[0].id;
        await connection.query('INSERT INTO person(name,birthday,credential_id) VALUES(?,?,?)',[user.name,user.birthday,credentialId]);
        connection.destroy();
        return user;
    }
    public async login(credential:Credential):Promise<User>{
         const connection:Connection = await this.connectionDB.open();
         const validateCredential = (await connection.query('CALL validate_credential(?,?)',[credential.email,credential.password]))[0][0];
         if(validateCredential){
            let user:User = (await connection.query('CALL get_user(?)',[validateCredential.id]))[0][0];
            /*user.credential = {};
            user.credential.id = validateCredential.id;*/
            connection.destroy();
            return user;
         }else
             return {id: -1};
    }
    public async getAll():Promise<User[]>{
        const connection:Connection = await this.connectionDB.open();
        let users:User[] = await connection.query('SELECT id, name,birthday,created_at FROM person');
        connection.destroy();
        return users;
    }
}