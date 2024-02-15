import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts;

export const selectIsLoading = createSelector(
  selectContacts,
  contacts => contacts.isLoading
);

export const selectItems = createSelector(
  selectContacts,
  contacts => contacts.items
);

export const selectError = createSelector(
  selectContacts,
  contacts => contacts.error
);
