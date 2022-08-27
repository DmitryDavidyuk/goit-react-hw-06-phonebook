import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'Redux/store';

const Filter = () => {
  const dispath = useDispatch();
  const value = useSelector(state => state.contacts.Filter);

  return (
    <label>
      Пошук контактів за іменами
      <input
        type="text"
        value={value}
        onChange={e => dispath(filterContacts(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
