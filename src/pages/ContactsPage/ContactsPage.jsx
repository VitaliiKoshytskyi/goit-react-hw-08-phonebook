import ContactList from 'components/ContactList/ContactList';
import ContactFrom from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.App}>
      <h1 className={css.phonebook}>This is your Phone Book</h1>
      <p className={css.text}>Put some name and phone number and add this contact to database.
 </p>
      <ContactFrom />
      <h2 className={css.phonebook}>Contacts</h2>
      <p className={css.text}>Find contacts by name and delete unnecessary one.</p>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
