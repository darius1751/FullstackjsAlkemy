import {ConnectionConfig} from 'promise-mysql';
export const key:ConnectionConfig = {
    port:parseInt(process.env.PORT_DB || '3306'),
    database:process.env.DATABASE || 'presupuesto',
    charset:process.env.CHARSET,
    host:process.env.HOST,
    password:process.env.PASSWORD_DB || 'darius1751.A',
    user:'root'
    
}

/*
CHARSET = utf8
PASSWORD_DB = darius1751.A
DATABASE = presupuesto
HOST = localhost
PORT_DB = 3306
 */