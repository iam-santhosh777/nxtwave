import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    phoneNumber: null,
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.phoneNumber = action.payload.phoneNumber;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.phoneNumber = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
