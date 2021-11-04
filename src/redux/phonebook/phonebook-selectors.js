export const getAllPhonebookContacts = (state) => state.phonebookContacts;
export const getPhonebookFilter = (state) => state.phonebookFilter;

export const getVisibleContact = (state) => {
  const contacts = getAllPhonebookContacts(state);
  const filter = getPhonebookFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
  );
};

export const addWithCheck = (state, { payload }) =>
  state.some(
    (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
  )
    ? alert(`${payload.name} is already in contacts.`)
    : state.some((contact) => contact.number === payload.number)
    ? alert(`${payload.number} is already in contacts.`)
    : [...state, payload];
