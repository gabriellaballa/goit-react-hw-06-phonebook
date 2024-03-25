import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import style from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ol className={style.contacts}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ol>
  );
};

export default ContactList;
