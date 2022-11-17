import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts, selectLoading, selectFilter } from 'redux/contacts/selectors';
import OneContact from '../OneContact';
import css from './ContactList.module.css';

export default function ContactList() {
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);
  const contacts  = useSelector(selectAllContacts);

  const contactsList = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className={css.items}>
        {contactsList().map(contact => (
          <OneContact key={contact.id} {...contact} />
        ))}
      </ul>
    </>
  );
}
