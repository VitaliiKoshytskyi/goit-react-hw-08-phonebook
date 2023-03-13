import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/contacts-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    dispatch(addContacts(initialData));
    setState({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formBox}>
        <label></label>
        <input
          onChange={handleChange}
          className={css.input}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div className={css.formBox}>
        <label></label>
        <input
          onChange={handleChange}
          className={css.input}
          value={number}
          type="tel"
          name="number"
          placeholder="Phone number"
          required
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
