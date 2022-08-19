import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HttpService } from '../services/HttpService';
import { User} from '../model/User';
import '../styles/Initial.css';
import '../styles/Register.css';
import { URLS } from '../constants/URLS';
import { Nav } from '../components/Nav';
import { Modal } from '../components/Modal';
import { TypesModal } from '../constants/TypesModal';
const initialRegister = {
    name:'',
    email:'',
    birthday:'',
    password:'',
    confirmPassword:''
};
const initialModal = {
    state:false,
    title:'Error al crear el registro',
    description:'No fue posible registrar al usuario',
    type: TypesModal.ERROR
};
export const Register = () => {
    let httpService:HttpService<User> = new HttpService<User>();
    const [register,setRegister] = useState(initialRegister);
    const [modal,setModal]  = useState(initialModal);
    const handleChange = (e:any) => {
        setRegister({...register,[e.target.name]:e.target.value});
    };
    const handleRegister = (e:any) => {
        e.preventDefault();
        /*const body:any = {email:'data',password:'data1234'};
        httpService.httpPost('http://localhost:8080/user/login',{body})
        .then(v => {
            console.log(v);
        })
        .catch((err) => {
            console.log('Error: ',err);
        })*/
        const {name,birthday,email,password} = register;
        let body:any = {
            name,
            birthday,
            credential:
            {
                email,
                password
            }
        };
        httpService.httpPost(URLS.REGISTER_USER,{body})
        .then((user) => {
            if(user.id === -1)
                setModal({...initialModal,state:true});
            else
                setModal({description:'Se a creado correctamente el usuario',title:'Usuario creado',type:TypesModal.ACCEPT,state:true});
        })
        .catch(err => {
            console.log(err);
            setModal({...initialModal,state:true});
        } )
    }
    const handleAccept = () => {
        setModal(initialModal);
    }
    return (
        <div>
            <Nav/>
            <div className = "container">
                <form className = "registerForm" onSubmit = {handleRegister}>
                        <label htmlFor = "name">Nombre completo:</label>
                        <br/>
                        <input type ='text' name = 'name' id = 'name' placeholder = "Ingrese su nombre" className = 'text' onChange = {handleChange} required/>
                        <br/>
                        <label htmlFor="email">Email:</label>
                        <br/>
                        <input type='email' name='email' id='email' placeholder="Ingrese su email" className =' text' onChange = {handleChange} required/>
                        <br/>
                        <label htmlFor="birthday">Fecha de nacimiento:</label>
                        <br/>
                        <input type = 'date' name = 'birthday' id = 'birthday' className = 'text' onChange = {handleChange} required/>
                        <br/>
                        <label htmlFor = "password">Contrase&ntilde;a:</label>
                        <br/>
                        <input type = 'password' name = 'password' id = 'password' placeholder = "Cree una contraseña" className = 'text' onChange = {handleChange} required/>
                        
                        <br/>
                        <label htmlFor = "confirmPassword">Confirmar contrase&ntilde;a:</label>
                        <br/>
                        <input type = 'password' name = 'confirmPassword' id = 'confirmPassword' placeholder = "Confirma tu contraseña" className = 'text' onChange = {handleChange} required/>
                        <br/>
                        <input type = "submit" value='Registrar' className = 'btn btn-accept'/>
                        <input type = "reset" value='Limpiar' className = 'btn btn-error'/>
                        
                        <br />
                        <NavLink to = '/login'>Ya tengo una cuenta</NavLink>
                        <br/>
                </form>
                {modal.state && <Modal title={modal.title} description = {modal.description} type={ modal.type} handleAccept = {handleAccept}/>}
            </div>
            
        </div>
    )
}