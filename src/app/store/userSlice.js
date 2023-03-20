import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user_key: '',
  auth: ['admin'],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const getUserAuth = ({ user }) => user.auth;

export default userSlice.reducer;
