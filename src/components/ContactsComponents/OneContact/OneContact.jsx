import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import {deleteContact} from 'redux/contacts/operations';
import css from './OneContact.module.css';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsXCircle } from 'react-icons/bs';

export default function OneContact({ id, name, number }) {
   const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const deleteContacts = contactId => {
	 dispatch(deleteContact(contactId));
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
        {isLoading ? <GiSandsOfTime/> :  <BsXCircle/>}
      </button>
    </li>
  );
}
