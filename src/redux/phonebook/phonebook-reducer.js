import types from './phonebook-types';

export const contactsReducer = (state = [], {type, payload}) => {
    switch (type) {
        case types.ADD:
            return [...state, payload];
        
        case types.DELETE:
            return state.filter(({ id }) => id !== payload);
        
        default:
            return state;
    }
};

export const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case types.FILTER:
            return payload;
        
        default:
            return state;
    }

};