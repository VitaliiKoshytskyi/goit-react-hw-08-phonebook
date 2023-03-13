import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = state;
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
    dispatch(register(initialData));
    setState({ name: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formBox}>
        <label>Name:</label>
        <input
          onChange={handleChange}
          className={css.formText}
          value={name}
          type="text"
          name="name"
          placeholder="User Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.formBox}>
        <label>Email:</label>
        <input
          onChange={handleChange}
          className={css.formText}
          value={email}
          type="email"
          name="email"
          placeholder="User Email"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <div className={css.formBox}>
        <label>Password:</label>
        <input
          onChange={handleChange}
          className={css.formText}
          value={password}
          type="password"
          name="password"
          placeholder="User Password"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
