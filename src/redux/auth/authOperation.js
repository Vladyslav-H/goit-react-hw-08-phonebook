import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);

      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      console.log(data.token);

      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchCurrerntUser = createAsyncThunk(
  'auth/refresh',
  async (_, {getState,rejectWithValue}) => {
    const state =  getState();
    const prevToken = state.auth.token;

    console.log(prevToken);

    if (prevToken === null) return rejectWithValue();
    token.set(prevToken);
    try {
      const { data } = await axios.get('/users/current');
      console.log('refresh', data);
      return data;
    } catch (error) {
      console.log('refresh', error.message);
    }
  }
);
