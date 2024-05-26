// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

const userSlice = createSlice({
  name: 'user',
  initialState: loadFromLocalStorage(),
  reducers: {
    setUser: (state, action) => {
      state.phoneNumber = action.payload.phoneNumber;
      state.isLoggedIn = true;
      saveToLocalStorage(state); // Save state to localStorage
    },
    clearUser: (state) => {
      state.phoneNumber = null;
      state.isLoggedIn = false;
      saveToLocalStorage(state); // Save state to localStorage
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
