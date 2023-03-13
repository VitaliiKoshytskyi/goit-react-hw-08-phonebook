import { NavLink } from 'react-router-dom';

import css from './NavbarAuth.module.css'
const NavbarAuth = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">Sign up</NavLink> 
      <NavLink  className={css.link} to="/login">Log in</NavLink>
    </div>
  );
};

export default NavbarAuth;
