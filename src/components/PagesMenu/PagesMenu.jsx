import { NavLink } from 'react-router-dom';
import css from './PagesMenu.module.css';
import menu from '../../data/menu.json';

const PagesMenu = () => {
  const elements = menu.map(({ id, title, link }) => (
    <NavLink className={css.link} to={link} key={id}>
      {title}
    </NavLink>
  ));
  return <>{elements}</>;
};

export default PagesMenu;