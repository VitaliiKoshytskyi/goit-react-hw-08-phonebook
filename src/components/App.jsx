import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import UserRoutes from 'UserRoutes';

// import css from './App.module.css';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <NavBar />
      <UserRoutes />
    </BrowserRouter>
  );
};
