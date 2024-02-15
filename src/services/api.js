import axios from 'axios';

axios.defaults.baseURL = 'https://65c6291fe5b94dfca2e1165b.mockapi.io';

export const apiGetContacts = async () => {
  const { data: contacts } = await axios.get('/contacts');
  return contacts;
};

export const apiAddContact = async ({ name, phone }) => {
  const { data: contact } = await axios.post('/contacts', {
    name,
    phone,
  });
  return contact;
};

export const apiDeleteContact = async contactId => {
  const { data: contact } = await axios.delete(`/contacts/${contactId}`);
  return contact;
};
