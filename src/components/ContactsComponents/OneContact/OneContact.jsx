import React from 'react';
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/ContactSlice';
import css from './OneContact.module.css';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsXCircle } from 'react-icons/bs';

export default function OneContact({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteContacts = contactId => {
    deleteContact(contactId);
    toast.success('You have just deleted a contact');
  };

  return (
    <li className={css.item} key={id}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
		  className={css.button}
        onClick={() => deleteContacts(id)}
      >
        {isDeleting ? <GiSandsOfTime/> :  <BsXCircle/>}
      </button>
    </li>
  );
}
