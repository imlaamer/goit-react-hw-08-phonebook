import { createSelector } from '@reduxjs/toolkit';
import { selectItems } from '../contacts/contactsSlice.selectors';

export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);
