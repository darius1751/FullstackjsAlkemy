import { Connection, createConnection } from "promise-mysql";
import {key} from './key';
export class ConnectionDB{
    public async open():Promise<Connection>{
        return await createConnection(key);
    }
}