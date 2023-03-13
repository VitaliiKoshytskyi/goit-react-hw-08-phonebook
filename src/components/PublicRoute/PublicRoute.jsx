import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from 'redux/auth/auth-selections';

const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
