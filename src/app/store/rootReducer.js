import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import user from './userSlice';
import remember from './rememberSlice';

// default: local storage
export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['remember'],
  // blacklist: [],
  timeout: null,
};

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = persistReducer(
    persistConfig,
    combineReducers({
      user,
      remember,
      ...asyncReducers,
    }),
  );

  return combinedReducer(state, action);
};

export default createReducer;
