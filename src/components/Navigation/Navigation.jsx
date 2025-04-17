import { NavLink } from 'react-router-dom';
import clsx from "clsx";
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <NavLink to='/' className={({isActive})=> clsx(s.navLink, isActive && s.active)}>Home</NavLink>
            <NavLink to='/movies' className={({isActive})=> clsx(s.navLink, isActive && s.active)}>Movies</NavLink>
        </nav>
    );
};

export default Navigation;