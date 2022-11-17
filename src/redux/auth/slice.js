import { createSlice } from '@reduxjs/toolkit';
import {register, logIn, logOut} from './operations';

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
	 [logOut.fulfilled](state, _){
		state.user = { name: null, email: null };
		state.token = null;
		state.isLoggenIn = false;
	 },
  },
});

export default authSlice.reducer;
