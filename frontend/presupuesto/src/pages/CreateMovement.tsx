import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavDashboard } from "../components/NavDashboard";
import { URLS } from "../constants/URLS";
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
export const CreateMovement = () => {
    const {user} = useContext<{user:User,dispathUser:any}>(UserContext);
    const [movement,setMovement] = useState(initialMovement);
    const historyHook = useHistory();
    let httpService:HttpService<Movement> = new HttpService();
    useEffect(() => {
        if(user.id === -1)
            historyHook.replace('/login');
    })
    const handleChange = (e:any) => {
        setMovement({...movement,[e.target.name]:e.target.value});
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
            console.log(m);
        })
        .catch((err)=>{
            console.log("Error: ",err);
        })
    }
    return (
        <div>
            <NavDashboard/>
            <div className="container">
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
        </div>
    );
}