import React, { Component } from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  static defaultProps = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string
  };

  // state = {
  //   contacts: this.props.contacts,
  //   filter: this.props.filter
  // };

  // addNewContact = ({name, number}) => {
  //   const idContact = uuidv4();
  //   const contact = {
  //     id: idContact,
  //     name,
  //     number
  //   };
  //   const { contacts } = this.state;

  //   contacts.some(
  //     ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
  //   )
  //     ? alert(`${name} is already in contacts.`)
  //     : contacts.some(({ number }) => number === contact.number)
  //     ? alert(`${number} is already in contacts.`)
  //     : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  // };

  // deleteContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(({ id }) => id !== contactId),
  //   }))
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContact = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter) ||
  //     contact.number.includes(filter)
  //   );
  // };

  // componentDidMount() {
  //   const localContacts = localStorage.getItem('contacts');
  //   const parcedLocalContacts = JSON.parse(localContacts);
  //   if (parcedLocalContacts) {
  //     this.setState({ contacts: parcedLocalContacts });
  //   };
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   };
  // };

  render() {
    return (
      <div className="App">
        <Section title="Phonebook">
          <ContactForm/>
        </Section>
        <Section title="Contacts">
          <Filter/>
          <ContactList/>
        </Section>
      </div>
    );
  };
  
}

export default App;
