import { useSelector, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selections';
import { logout } from 'redux/auth/auth-operations';

const NavbarUser = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {name},<button onClick={onLogout}>logout</button>
    </div>
  );
};

export default NavbarUser;
