import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <NavBar />
      <UserRoutes />
    </BrowserRouter>
  );
};
