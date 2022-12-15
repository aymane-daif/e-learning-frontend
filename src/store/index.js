import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import spinnerReducer from './redux/spinnerSlice';

const rootReducer = combineReducers({
  spinner: spinnerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
