import { Movement as MovementModel} from "../model/Movement";
import '../styles/Initial.css';
import '../styles/Movement.css';
import {TypeMovement} from '../constants/TypeMovement';
const movementInitial:MovementModel = {
    typeMovement:
    {
        id:1
    }
};
export const Movement = ({movement = movementInitial,type = TypeMovement.INGRESOS }) => {
    const types = ["income","egress"];
    return (
        <div className = {`movement ${types[type-1]}`}>
            Monto: <strong>{`$${movement.balance}`}</strong>
            <p>Descripcion: <strong>{movement.description}</strong></p>
            <p>Fecha creacion: <strong>{movement.createdAt?.split('T')[0]}</strong></p>
            
            {movement.category?.id &&  <p><strong>Categoria:</strong> {movement.category.name}</p>}
        </div>
    );
}