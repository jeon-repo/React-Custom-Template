import { combineReducers } from '@reduxjs/toolkit';
import sub from './subSlice';

const reducer = combineReducers({
  sub,
});

export default reducer;
