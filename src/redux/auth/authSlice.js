import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logIn,
  logOut,
  fetchCurrerntUser,
} from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  error: null,
  isLoading: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState: initialState,

  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogin = true;
      state.isLoading = false;
    },
    [registerUser.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [logIn.pending](state) {
      state.isLoading = true;
      state.error = null;
    },

    [logIn.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogin = true;
      state.isLoading = false;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [logOut.fulfilled](state) {
      state.isLogin = false;
      state.token = null;
      state.user = { name: null, email: null };
    },
    [fetchCurrerntUser.fulfilled](state, action) {
      console.log(action);
      // state.user = action.payload;
      state.isLogin = true;
    },
  },
});

export default authSlise.reducer;
