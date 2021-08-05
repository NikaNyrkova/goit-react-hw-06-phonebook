import React from 'react';

import st from './ContactListItem.module.css';

const ContactListItem = ({contacts, deleteContact}) => {
    return (
        contacts.map(({ id, name, number }) => {
            return (
                <li key={id} className={st.item}>
                    <span>{name}: {number}</span>
                    <button
                        onClick={() => deleteContact(id)}
                        type="button"
                        className={st.button}
                    >
                        Delete
                    </button>
                </li>
            )
        })
    )
};

export default ContactListItem;