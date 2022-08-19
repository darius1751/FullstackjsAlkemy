import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserActions } from '../constants/UserActions';
import { UserContext } from '../context/UserContext';
import '../styles/Nav.css';
export const NavDashboard = () => {
    const {dispathUser} = useContext(UserContext);
    const handleLogout = () =>{
        dispathUser({type:UserActions.LOGOUT});
    }
    return (
        <nav className = 'nav'>
            <ul className = "nav-list">
                <li className = "item-nav-list">
                    <NavLink to = {`/dashboard`}>
                        Dashboard
                    </NavLink>
                    
                </li>
                <li className = "item-nav-list">
                    <NavLink to = 'dashboard/create_movement'>
                        Crear Movimiento
                    </NavLink>
                    </li>
                <li className = "item-nav-list">
                    <NavLink to = {`/dashboard`}>
                        Historial de Movimientos
                    </NavLink>
                </li>
                <li className = "item-nav-list">
                    <NavLink to = {`/login`} onClick = {handleLogout}>
                        Cerrar Sesion
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}