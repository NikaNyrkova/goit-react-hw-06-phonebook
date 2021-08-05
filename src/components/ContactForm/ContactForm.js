import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

import phonebookActions from "../../redux/phonebook/phonebook-actions";

import st from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const idInputName = uuidv4();
    const idInputNumber = uuidv4();
    return (
      <form onSubmit={this.handleSubmitForm} className={st.form_contact}>
        <label htmlFor={idInputName} className={st.label}>
          Name
          <input
            type="text"
            id={idInputName}
            onChange={this.handleChange}
            value={this.state.name}
            className={st.input}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={idInputNumber} className={st.label}>
          Number
          <input
            type="tel"
            id={idInputNumber}
            onChange={this.handleChange}
            value={this.state.number}
            className={st.input}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={st.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(phonebookActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
