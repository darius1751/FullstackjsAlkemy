import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "../components/Modal";
import { NavDashboard } from "../components/NavDashboard";
import { TypesModal } from "../constants/TypesModal";
import { URLS } from "../constants/URLS";
import { UserActions } from "../constants/UserActions";
import { UserContext } from "../context/UserContext";
import { Movement } from "../model/Movement";
import { User } from "../model/User";
import { HttpService } from "../services/HttpService";
import '../styles/Initial.css';
const initialMovement = {
    typeMovement:'1',
    balance:0,
    description:''
}
const initialModal = {
    state:false,
    title:"",
    description:"",
    type:TypesModal.ERROR
}
export const CreateMovement = () => {
    const {user,dispathUser} = useContext<{user:User,dispathUser:any}>(UserContext);
    const [movement,setMovement] = useState(initialMovement);
    const [modal, setModal] = useState(initialModal);
    const historyHook = useHistory();
    let httpService:HttpService<Movement> = new HttpService();
    useEffect(() => {
        if(user.id === -1)
            historyHook.replace('/login');
    })
    const handleChange = (e:any) => {
        setMovement({...movement,[e.target.name]:e.target.value});
    }
    const handleAccept = ( ) => {
        setModal(initialModal);
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        let body:any = {
            ...movement,
            user:{
                id: user.id
            },
            typeMovement:{
                id: movement.typeMovement
            }
        };
        
        httpService.httpPost(URLS.CREATE_MOVEMENT,{body})
        .then((m)=>{
            setModal({
                state:true,
                description:'Se a creado correctamente el movimiento',
                title:"Creacion movimiento existoso",
                type:TypesModal.ACCEPT
            });
            httpService.httpGet(`${URLS.GET_ALL_MOVEMENTS}${user.id}`)
            .then((movements) => {
                dispathUser({type:UserActions.UPDATE_MOVEMENTS,payload:{
                        movements:movements
                    }
                })
                updateBalance();
            })
            
            
        })
        .catch((err)=>{
            console.log("Error: ",err);
            setModal({
                state:true,
                description:'No fue posible crear el movimiento',
                title:"Error",
                type:TypesModal.ERROR
            });
        })
    }
    const updateBalance = ()=>{
        new HttpService<any>().httpGet(`${URLS.GET_BALANCE}${user.id}`)
        .then(data =>{
            dispathUser({type:UserActions.UPDATE_BALANCE,payload:{balance:data.balace}});
        })
    }
    return (
        <div>
            <NavDashboard/>
            <div className = "container">
                <form onSubmit = {handleSubmit}>
                    <label htmlFor = 'typeMovement'>Tipo de movimiento: </label>
                    <br/>
                    <select name = "typeMovement" id='typeMovement' className="text" onChange = {handleChange}>
                        <option value = '1'>Ingreso</option>
                        <option value = '2'>Egreso</option>
                    </select>
                    <br/>
                    <label>Monto:</label>
                    <br/>
                    <input type='number' name='balance' step='0.01' placeholder='Ingrese el monto' className="text" onChange={handleChange} />
                    <br/>
                    <label>Descripcion: </label>
                    <br/>
                    <textarea name = 'description' placeholder = 'Ingrese una description sobre el movimiento' maxLength = {500} className = 'text-area' onChange={handleChange}></textarea>
                    <br />
                    <input type = 'submit' value = 'agregar movimiento' className = "btn btn-add"/>
                    <input type = 'reset' value = 'limpiar' className = "btn btn-error"/>
                </form>
            </div>            
            { modal.state && <Modal title = {modal.title} description = {modal.description} type = {modal.type} handleAccept = {handleAccept} />}
        </div> 
    );
}