import { TypesModal } from "../constants/TypesModal"
import '../styles/Initial.css';
import '../styles/Modal.css';
import authError from '../assets/icons/errorAuth.png';
import error from '../assets/icons/error.png';
import info from '../assets/icons/info.png';
import accept from '../assets/icons/accept.png';
export const Modal = ({description = '',title = 'Informacion',type = TypesModal.INFO,handleAccept = () => {}}) => {
    const images = [
        {
            image:error,
            alt:'Error',
            style:'btn-error'
        },
        {
            image:info,
            alt:'Informacion',
            style:'btn-info'
        },
        {
            image:authError,
            alt:'Error de autenticacion',
            style:'btn-auth-error'
        },
        {
            image:accept,
            alt:'Se a realizado la operacion correctamente',
            style:'btn-accept'
        }
    ];
    return (
        <div className="container-modal">
            <div className = "modal">
                    <img src={images[type].image} className='modal-icon' alt = {images[type].alt}/>
                    <header className="modal-title">
                        <h4>{title}</h4>
                    </header>
                    <article className="modal-description">
                        {description}
                    </article>
                    <br/>
                    <button onClick={handleAccept} className={`btn ${images[type].style}`}>aceptar</button>
                
            </div>
        </div>
    )
}