import React from 'react';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name} - {contact.number}
      <button
        className={css.deletebtn}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
