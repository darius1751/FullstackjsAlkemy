import { TypeMovement } from "../constants/TypeMovement";
import { Movement as MovementModel } from "../model/Movement";
import { Movement } from "./Movement";
import '../styles/Initial.css';
import '../styles/Dashboard.css';
const movementsInitial:MovementModel[] = [];
export const ListMovements = ({type = TypeMovement.INGRESOS,movements = movementsInitial}) => {
    const movementTypes = ["Ingresos","Egresos"];
    return (
        <div className = "type-movement">
            <h3>{movementTypes[type-1]}</h3>
            <ul className = "list-movement">
                {                    
                    movements.map((movement) => {
                        return (
                            <li key = {movement.id}>
                                <Movement movement = {movement}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}