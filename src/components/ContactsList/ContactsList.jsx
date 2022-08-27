import React from 'react';
import CSS from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/store';

const ContactsList = ({ contacts }) => {
  const dispath = useDispatch();

  return (
    <ul className={CSS.contact}>
      {contacts.map(({ id, name, number }) => (
        <li className={CSS.contactList} key={id}>
          <p>{name}:</p>
          <p>{number}</p>
          <button type="button" onClick={() => dispath(deleteContact(id))}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
