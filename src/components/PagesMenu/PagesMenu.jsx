import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selections';
import css from './PagesMenu.module.css';
import menu from '../../data/menu.json';

const PagesMenu = () => {
  const isLogin = useSelector(isUserLogin);
  const menuItems = !isLogin ? menu.filter(item => !item.private) : menu;
  const elements = menuItems.map(({ id, title, link }) => (
    <NavLink className={css.link} to={link} key={id}>
      {title}
    </NavLink>
  ));
  return <div className={css.box}>{elements}</div>;
};

export default PagesMenu;
