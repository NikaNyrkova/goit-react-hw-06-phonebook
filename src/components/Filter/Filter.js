import React from "react";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";

import st from "./Filter.module.css";

const Filter = () => {
  const value = useSelector((state) => state.phonebookFilter);
  const dispatch = useDispatch();

  return (
    <label className={st.label}>
      Find contact by name
      <input
        type="text"
        className={st.input}
        value={value}
        onChange={(e) =>
          dispatch(phonebookActions.filterContacts(e.target.value))
        }
      />
    </label>
  );
};

export default Filter;
