import { createSlice } from '@reduxjs/toolkit';
import { registerUser,logIn } from './authOperation';

const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLogin: false,
    error: null,
    isLoading: false,
  },

  extraReducers: {
    // [registerUser.pending](state, action) {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    [registerUser.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogin = true;
      state.isLoading = false;
    },
    // [registerUser.rejected](state, action) {
    //   state.error = action.payload.error;
    //   state.isLoading = false;
    // },
      
       [logIn.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogin = true;
      state.isLoading = false;
    },
  },
});

export default authSlise.reducer;
