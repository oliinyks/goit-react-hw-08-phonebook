import React from 'react';
import Notiflix from 'notiflix';
import { useDeleteContactMutation } from 'redux/ContactSlice';
import css from './OneContact.module.css';

export default function OneContact({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteContacts = contactId => {
    deleteContact(contactId);
    Notiflix.Notify.success('You have just deleted a contact');
  };

  return (
    <li className={css.item} key={id}>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContacts(id)}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
}
