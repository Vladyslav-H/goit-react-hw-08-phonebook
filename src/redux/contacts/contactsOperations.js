import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      return response.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postContacts = createAsyncThunk(
  'contacts/postContacts',
  async function (newContact, { rejectWithValue }) {
    const { name, number } = newContact;
    try {
      const response = await axios.post('/contacts', {
        name,
        number,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
