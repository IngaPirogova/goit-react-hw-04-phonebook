import { useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {

    const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
    const [filter, setFilter] = useState('');


useEffect(() => {

  
})


    }


//   componentDidMount() {
//     console.log('App componentDidMount');

//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Add componentDidUpdate');

//     if (this.state.contacts !== prevState.contacts) {
//       console.log('Oбновилось поле contacts, записываю contacts в хранилище');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const contact = {
//       name,
//       number,
//       id: nanoid(),
//     };

//     this.setState(({ contacts }) => {
//       if (
//         contacts.find(
//           contact => contact.name.toLowerCase() === name.toLowerCase()
//         )
//       ) {
//         return alert(`${name} is already in contacts!`);
//       }

//       return {
//         contacts: [contact, ...contacts],
//       };
//     });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   searchContacts = () => {
//     const { filter, contacts } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     return (
//       <section className={css.section}>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter filter={this.state.filter} changeFilter={this.changeFilter} />
//         <ContactList
//           contacts={this.searchContacts()}
//           deleteContact={this.deleteContact}
//         />
//       </section>
//     );
//   }
// }
