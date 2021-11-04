import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import phonebookActions from "../../redux/phonebook/phonebook-actions";

import st from "./ContactForm.module.css";

const ContactForm = () => {
  const initialState = {
    name: "",
    number: "",
  };
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const reset = () => {
    setState({ name: "", number: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = (name, number) =>
    dispatch(phonebookActions.addContact(name, number));

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(state);
    reset();
  };

  const idInputName = uuidv4();
  const idInputNumber = uuidv4();

  return (
    <form onSubmit={handleSubmitForm} className={st.form_contact}>
      <label htmlFor={idInputName} className={st.label}>
        Name
        <input
          type="text"
          id={idInputName}
          onChange={handleChange}
          value={state.name}
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
          onChange={handleChange}
          value={state.number}
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
};

export default ContactForm;
