import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import spinnerReducer from './redux/spinnerSlice';
import cartReducer from './redux/cartSlice';

const rootReducer = combineReducers({
  spinner: spinnerReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
