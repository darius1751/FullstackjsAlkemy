import { Connection } from 'promise-mysql';
import {ConnectionDB} from '../connection/ConnectionDB';
import { TypeMovement } from '../model/TypeMovement';
export class TypeMovementDB{
    public async getTypes():Promise<TypeMovement[]>{
        const connectionDB:ConnectionDB = new ConnectionDB();
        let connection:Connection = await connectionDB.open();
        return await connection.query('SELECT * FROM type_movement AS tm ORDER BY tm.id ASC');
        
    }
}