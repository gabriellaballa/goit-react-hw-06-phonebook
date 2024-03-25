import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import localStorageService from './LocalStorage/LocalStorage';

const App = () => {
  const [contacts, setContacts] = useState(localStorageService.getContacts());
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    localStorageService.saveContacts(contacts);
  }, [contacts]);

  const handleAddContact = newContact => {
    const isDuplicate = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isDuplicate) {
      alert(`Contact with name '${newContact.name}' already exists!`);
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        { ...newContact, id: `id-${prevContacts.length + 1}` },
      ]);
    }
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>My Phonebook</h1>
      <div className="addformula">
        <ContactForm
          onAddContact={handleAddContact}
          name={name}
          number={number}
          setName={setName}
          setNumber={setNumber}
        />
        <label className="filterinput">
          <span className="filtername">Filter by Name:</span>
          <input
            className="filter-searchbar"
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
          />
        </label>
      </div>

      <h2>Contacts:</h2>
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
