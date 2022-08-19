import { Movement as MovementModel} from "../model/Movement";
import '../styles/Initial.css';
import '../styles/Movement.css';
const movementInitial:MovementModel = {
    typeMovement:
    {
        id:1
    }
};
export const Movement = ({movement = movementInitial}) => {
    
    return (
        <div className = "movement">
            Monto: <strong>{`$${movement.balance}`}</strong>
            <p>Descripcion: <strong>{movement.description}</strong></p>
            <p>Fecha creacion: <strong>{movement.createdAt?.split('T')[0]}</strong></p>
            
            {movement.category?.id &&  <p><strong>Categoria:</strong> {movement.category.name}</p>}
        </div>
    );
}