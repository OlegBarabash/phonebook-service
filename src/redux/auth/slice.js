import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRegister: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled](state, action) {
      state.isRefreshing = false;
      state.user = { name: null, email: null };
      state.isRegister = true;
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [register.rejected]: handleRejected,
    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, action) {
      state.isRefreshing = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRgister = false;
      state.error = null;
    },
    [logIn.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.isRefreshing = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [logOut.rejected]: handleRejected,
    [refreshUser.pending]: handlePending,
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
