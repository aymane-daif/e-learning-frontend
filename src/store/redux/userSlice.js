import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    removeCurrentUser: (state, action) => {
      state.user = {}
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;