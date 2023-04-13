import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        userData
      );

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
    'user/login',
    async (userData, { rejectWithValue }) => {
    try {
      const data = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        userData
      );

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)