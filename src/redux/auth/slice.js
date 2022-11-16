import { createSlice } from '@reduxjs/toolkit';
import {register, logIn} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
		state.user = action.payload.user;
		state.token = action.payload.token;
		state.isLoggenIn = true;
	 },
    [logIn.fulfilled](state, action) {
		state.user = action.payload.user;
		state.token = action.payload.token;
		state.isLoggenIn = true;
	 },
  },
});

export default authSlice.reducer;
