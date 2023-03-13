import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import css from './NavbarUser.module.css'

import { getUser } from 'redux/auth/auth-selections';
import { logout } from 'redux/auth/auth-operations';

const NavbarUser = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.box}>
      <p className={css.name}>{name}</p>
      
 
      <Stack spacing={2} direction="row">
      <Button onClick={onLogout} type="submit" variant="contained">Logout</Button>
    </Stack>
    </div>
  );
};

export default NavbarUser;
