import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64341a59582420e23173f9e1.mockapi.io';


// axios.defaults.baseURL = 'https://connections-api.herokuapp.com '  


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
    const { name, phone } = newContact;
    try {
      const response = await axios.post('/contacts', {
        name,
        phone,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
