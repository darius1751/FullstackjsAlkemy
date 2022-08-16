import { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../styles/Initial.css';
import '../styles/Login.css';
import loginLogo from '../assets/login.png';
import emailIcon from '../assets/icons/emailIcon.png';
import lockIcon from '../assets/icons/lockIcon.png';
import { Modal } from '../components/Modal';
import { TypesModal } from '../constants/TypesModal';
import { HttpService } from '../services/HttpService';
import { User } from '../model/User';
import { URLS } from '../constants/URLS';
import { UserContext } from '../context/UserContext';
import { UserActions } from '../constants/UserActions';
const initialLogin = {
    email:'',
    password:''
};
export const Login = () => {
    const [login,setLogin] = useState(initialLogin);
    const [modal,setModal] = useState(false);
    const {dispathUser} = useContext<any>(UserContext);
    const historyHook = useHistory();
    
    let httpService:HttpService<User> = new HttpService<User>();
    const handleChange = (e:any)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }
    const handleLogin = (e:any)=>{
        e.preventDefault();
        let body:any = login;
        httpService.httpPost(URLS.LOGIN,{body})
        .then(data =>{
            if(data.id !== -1){
                dispathUser({type:UserActions.LOGIN,payload:data});
                console.log(historyHook);
                historyHook.replace({pathname:'/dashboard'});
                
            }else
                setModal(true);
            console.log(data);
        })
        .catch(err =>{
            console.log("Error: ",err);
        });
        
    }
    const handleAcceptModal = () =>{
        setModal(false);
    }
    return (
        <div>
            <div className='container'>                
                <form className="loginForm" onSubmit={handleLogin}>
                    <img src={loginLogo} alt="Login logo" className='logo'/>
                    <br />
                    <label htmlFor="email">Email:</label>
                    <br/>
                    <div className='input-icon'>
                        <img src={emailIcon} alt="emailIcon" className='icon'/>
                        <input type='text' placeholder="Ingrese su email" id='email' className='text email' name='email' onChange={handleChange} required/>    
                    </div>
                    <br/>
                    <label htmlFor="password">Contrase&ntilde;a:</label>
                    <br/>                    
                    <div className='input-icon'>
                        <img src={lockIcon} alt="lockIcon" className='icon'/>
                        <input type="password" placeholder="Ingrese su contraseña" id='password' name='password' title="Ingrese su contraseña" className='text' onChange={handleChange} required/>
                    </div>
                    <br/>
                    <br/>
                    <input type="submit" name='login' value='Iniciar sesion' title="Iniciar sesion ahora" className='btn'/>
                </form>
                    <NavLink to='/register'>Aun no te has registrado?</NavLink>
                {modal && <Modal handleAcept={handleAcceptModal} title='Error al autentificar' type = {TypesModal.ERROR_AUTH} description ='Usuario y/o contrase&ntilde;a incorrecta(s), por favor vuelva a intentarlo'/>}
            </div>
        </div>
    );
}