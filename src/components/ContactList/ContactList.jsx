import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/ContactSlice';
import { getStatusFilter } from 'redux/selectors';
import OneContact from '../OneContact';
import css from './ContactList.module.css';

export default function ContactList() {
  const filter = useSelector(getStatusFilter);
  const { data: contacts = [], isFetching } = useFetchContactsQuery();

  const contactsList = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isFetching && <p>Loading...</p>}
      <ul className={css.items}>
        {contactsList().map(contact => (
          <OneContact key={contact.id} {...contact} />
        ))}
      </ul>
    </>
  );
}
