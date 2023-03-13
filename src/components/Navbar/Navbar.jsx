import { useSelector } from 'react-redux';
import PagesMenu from 'components/PagesMenu/PagesMenu';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarAuth from './NavbarAuth/NavbarAuth';

import { isUserLogin } from 'redux/auth/auth-selections';
import css from './Navbar.module.css';

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <header className={css.header}>
      <PagesMenu />
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </header>
  );
};
export default NavBar;
