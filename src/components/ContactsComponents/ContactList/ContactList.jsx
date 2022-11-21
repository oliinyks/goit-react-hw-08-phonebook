import React from 'react';
import OneContact from '../OneContact';
import { useContacts } from 'hooks/useContacts';
import { getStatusFilter } from 'redux/filter/selectors';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export default function ContactList() {
  const filter = useSelector(getStatusFilter);
  const { contacts = [] } = useContacts();

  const contactsList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <>
      <ul className={css.items}>
        {contactsList().map(contact => (
          <OneContact key={contact.id} {...contact} />
        ))}
      </ul>
    </>
  );
}
