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
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formBox}>
        <label></label>
        <input
          onChange={handleChange}
          className={css.input}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
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
          minlength="8"
          required
        />
      </div>
      <button className={css.button} type="submit">
        Get started now
      </button>
    </form>
  );
};

export default RegisterForm;
