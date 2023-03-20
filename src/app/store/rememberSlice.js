import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'test1',
  content: 'test2',
};

const rememberSlice = createSlice({
  name: 'remember',
  initialState,
  reducers: {
    setRemember(state, action) {
      state.title = action.payload;
    },
  },
});

export const { setRemember } = rememberSlice.actions;
export const rememberTitle = ({ remember }) => remember.title;

export default rememberSlice.reducer;
