import { Connection } from "promise-mysql";
import { ConnectionDB } from "../connection/ConnectionDB";
import { Movement } from "../model/Movement";

export class MovementDB{
    private connectionDB:ConnectionDB;
    constructor(){
        this.connectionDB = new ConnectionDB();
    }
    public async getAllByUserId(id:number):Promise<Movement[]>{
        try{
            const connection:Connection = await this.connectionDB.open();
            let results:[] = (await connection.query('CALL get_movements_by_user_id(?)',[id]))[0];
            let movements:Movement[] = [];
            if(results.length > 0){
                results.forEach((movement)=>{
                    //m.id, m.description, m.balance, m.created_at AS createdAt, tm.id AS 'tmId', tm.name AS 'tmName', cp.id AS 'categoryId', cp.name AS 'categoryName'
                    const {id,description,balance,createdAt,tmId,tmName,categoryId,categoryName} = movement;
                    movements.push({
                        id,
                        balance,
                        createdAt,
                        description,
                        typeMovement:
                        {
                            id:tmId,
                            name:tmName
                        },
                        category:
                        {
                            id:categoryId,
                            name:categoryName
                        }
                    });
                });
            }
            connection.destroy();
            return movements;
        }catch(ex){
            throw ex;
        }        
    }

    public async create(movement:Movement):Promise<Movement>{
        try{
            const connection:Connection = await this.connectionDB.open();
            await connection.query('CALL create_movement(?,?,?,?,?)',
                [movement.description,movement.balance,movement.typeMovement.id,movement.category?.id,movement.user?.id]
            )
            return movement;
            /*IN new_description VARCHAR(255), 
    IN new_balance DECIMAL(12,2),
    IN new_type_movement_id INT,
    IN new_category_personal_id INT,
    IN new_person_id INT */
        }catch(ex){
            throw ex;
        }
        
    }
}