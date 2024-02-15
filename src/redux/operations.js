import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { apiGetContacts, apiAddContact, apiDeleteContact } from '../services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await apiGetContacts();
      return contacts;
    } catch (error) {
      toast.error(`Oops, some error occured... ${error.message}`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const contact = await apiAddContact(newContact);
      toast.success('Your contact were successfully added!');
      return contact;
    } catch (error) {
      toast.error(`Oops, some error occured... ${error.message}`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const contact = await apiDeleteContact(contactId);
      toast.success('Your contact were successfully deleted!');
      return contact;
    } catch (error) {
      toast.error(`Oops, some error occured... ${error.message}`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
