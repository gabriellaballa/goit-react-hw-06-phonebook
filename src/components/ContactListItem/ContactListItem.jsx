// ContactListItem.jsx
import React from 'react';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    //console.log(contact.id);
    onDeleteContact(contact.id);
  };

  return (
    <li>
      {contact.name} - {contact.number}
      <button className={css.deletebtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
