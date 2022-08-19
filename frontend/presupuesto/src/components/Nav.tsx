import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';
export const Nav = () => {
    return (
        <nav className = "nav">
            <ul className = "nav-list">
                <li className = "item-nav-list">
                    <NavLink to = '/' activeClassName='item-nav-list-active'>
                        Inicio
                    </NavLink>
                    
                </li>
                <li className = "item-nav-list">
                    <NavLink to = '/login' activeClassName='item-nav-list-active'>
                        Iniciar sesion
                    </NavLink>
                </li>
                <li className = "item-nav-list">
                    <NavLink to = '/register' activeClassName='item-nav-list-active'>
                        Registrar
                    </NavLink>
                    
                </li>
            </ul>
        </nav>
    )
}