
import ContactList from 'components/ContactList/ContactList';
import ContactFrom from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import css from "./ContactsPage.module.css"


const ContactsPage = () => {
    
    return (
         <div className={css.App}>
      <h1 className={css.phonebook}>Phonebook</h1>
      <ContactFrom />
      <h2 className={css.contacts}>Contacts</h2>
      <p className={css.text}>Find contacts by name</p>
      <Filter/>
      <ContactList/>
    </div>
    )


}

export default ContactsPage

