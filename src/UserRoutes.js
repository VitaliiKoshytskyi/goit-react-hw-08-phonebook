import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));


const UserRoutes = () => {
    
    return (
      <Suspense fallback={<p>...Loading</p>}>
        <Routes>
          <Route element={<PublicRoute />}>
<Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
          </Route>
          <Route path='/' element={<HomePage />} />
          <Route element={<PrivateRoute/>}>
 <Route path='/contacts' element={<ContactsPage />} />
          </Route>
       
        
          
        
        <Route path="*" element={<HomePage />} />
      </Routes>
        </Suspense>
    )
}

export default UserRoutes