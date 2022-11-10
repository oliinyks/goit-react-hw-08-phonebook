import { useFetchContactsQuery } from 'redux/ContactSlice';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import css from './Contacts.module.css';

export default function Contacts() {
  const { data: contacts = [], isLoading } = useFetchContactsQuery();

  return (
    <section className={css.phonebook}>
      <h1 className={css.title}>Your amazing phonebook</h1>
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
