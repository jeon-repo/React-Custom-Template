import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'utils/common/@lodash';

const testInitState = {
  test: '1234',
};

export const setTest = createAsyncThunk('sub/setTest', async (text, { dispatch, getState }) => {
  const data = _.cloneDeep(testInitState);
  data.test = text;
  return data;
});

const initialState = {
  test: 'test keyword',
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    resetTest(state, action) {
      state.test = initialState.test;
    },
  },
  extraReducers: {
    [setTest.fulfilled]: (state, action) => action.payload,
  },
});

export const { resetTest } = testSlice.actions;
export const getKeyword = ({ test }) => test.test;

export default testSlice.reducer;
