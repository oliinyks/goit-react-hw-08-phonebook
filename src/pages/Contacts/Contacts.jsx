import { selectLoading } from 'redux/contacts/selectors';
import Form from 'components/ContactsComponents/Form';
import ContactList from 'components/ContactsComponents/ContactList';
import Filter from 'components/ContactsComponents/Filter';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { useContacts } from 'hooks/useContacts';

export default function Contacts() {
  const isLoading = useSelector(selectLoading);
  const { contacts } = useContacts();

  return (
    <section>
      <h1 className={css.title}>Your phonebook</h1>
      <Form />
      <h2 className={css.subtitle}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          {isLoading && <p>Loading...</p>}
          <Filter />
          <ContactList />
        </>
      ) : (
        <p className={css.text}>You have no contacts</p>
      )}
    </section>
  );
}
