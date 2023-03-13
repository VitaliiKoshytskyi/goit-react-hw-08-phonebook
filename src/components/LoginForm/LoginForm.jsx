import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import css from './LoginForm.module.css';

const LoginForm = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;
  const dispatch = useDispatch();

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const initialData = { ...state };
    dispatch(login(initialData));
    setState({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formBox}>
        <label></label>
        <input
          onChange={handleChange}
          className={css.input}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <div className={css.formBox}>
        <label></label>
        <input
          onChange={handleChange}
          className={css.input}
          value={password}
          type="password"
          name="password"
          placeholder="Password"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
        <button className={css.button} type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;
