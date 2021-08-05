import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";

import st from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label className={st.label}>
      Find contact by name
      <input
        type="text"
        className={st.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.phonebookFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(phonebookActions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
