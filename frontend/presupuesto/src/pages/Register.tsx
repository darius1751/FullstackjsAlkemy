import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HttpService } from '../services/HttpService';
import { User } from '../model/User';
import '../styles/Initial.css';
import '../styles/Register.css';
import { URLS } from '../constants/URLS';
const initialRegister = {
    name:'',
    email:'',
    birthday:'',
    password:'',
    confirmPassword:''
};
export const Register = () => {
    let httpService:HttpService<User> = new HttpService<User>();
    const [register,setRegister] = useState(initialRegister);
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
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        } )
    }
    return (
        <div>
            <div className = "container">
                <form className = "registerForm" onSubmit = {handleRegister}>
                    <div>
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
                        <input type = "submit" value='Registrar' className = 'btn'/>
                        <input type = "reset" value='Borrar todo' className = 'btn'/>
                        
                        <br />
                        <NavLink to = '/login'>Ya tengo una cuenta</NavLink>
                        <br/>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}