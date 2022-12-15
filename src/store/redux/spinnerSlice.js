import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  pendingRequests: 0,
};

export const spinnerSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    incrementPendingRequests: (state: { pendingRequests: number }) =>
      void {
        ...state,
        pendingRequests: state.pendingRequests++,
      },
    decrementPendingRequests: (state: { pendingRequests: number }) =>
      void {
        ...state,
        pendingRequests: state.pendingRequests--,
      },
  },
});

export const spinnerActions = spinnerSlice.actions;

export default spinnerSlice.reducer;
