import PagesMenu from 'components/PagesMenu/PagesMenu';
import css from './Navbar.module.css';

const NavBar = () => {
  return (
    <header className={css.header}>
      <PagesMenu />
    </header>
  );
};
export default NavBar;
