import React from 'react';

import st from './Section.module.css';


const Section = ({title, children}) => {
    return (
        <section className={st.section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;