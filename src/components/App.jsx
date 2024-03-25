import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/contactSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleAddContact = newContact => {
    const isDuplicate = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isDuplicate) {
      alert(`Contact with name '${newContact.name}' already exists!`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>My Phonebook</h1>
      <div className="addformula">
        <ContactForm onAddContact={handleAddContact} />
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
      <ContactList onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
