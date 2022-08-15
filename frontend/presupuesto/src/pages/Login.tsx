import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Login.css';
const initialLogin = {
    email:'',
    password:''
}
export const Login = ()=>{
    const [login,setLogin] = useState(initialLogin);
    const handleChange = (e:any)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }
    
    return (
        <div>
            <div className='container'>
                <form className="loginForm">
                    <label htmlFor="email">Email:</label>
                    <br/>
                    <input type='text' placeholder="Ingrese su email" id='email' className='text' name='email' onChange={handleChange}/>
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <br/>
                    <input type="password" placeholder="Ingrese su contraseña" id='password' name='password' title="Ingrese su contraseña" className='text' onChange={handleChange}/>
                    <br/>
                    <br/>
                    <input type="submit" name='login' value='Iniciar sesion' title="Iniciar sesion ahora" className='btn' />
                    <br/>
                    <NavLink to='/register'>Aun no te has registrado?</NavLink>
                </form>
            </div>
        </div>
    );
}