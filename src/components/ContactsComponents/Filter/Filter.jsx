import React from 'react';
import { getStatusFilter } from 'redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/FilterSlice';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export default function Filter() {
	const filter = useSelector(getStatusFilter);
  const nameFilterId = nanoid();
  const dispatch = useDispatch();

  const changeFilter = e => {
    const event = e.currentTarget.value;
    dispatch(setFilter(event));
  };

  return (
    <>
      <label className={css.label} htmlFor={nameFilterId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        id={nameFilterId}
        onChange={changeFilter}
      />
    </>
  );
}
