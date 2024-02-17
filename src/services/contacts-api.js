import { apiInstance } from './api-common';

export const apiGetContacts = async () => {
  const { data: contacts } = await apiInstance.get('/contacts');
  return contacts;
};

export const apiAddContact = async ({ name, number }) => {
  const { data: contact } = await apiInstance.post('/contacts', {
    name,
    number,
  });
  return contact;
};

export const apiDeleteContact = async contactId => {
  const { data: contact } = await apiInstance.delete(`/contacts/${contactId}`);
  return contact;
};
