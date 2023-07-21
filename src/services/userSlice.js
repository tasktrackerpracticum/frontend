import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  getUserMe } from '../utils/UserApi';


export const fetchUserMe = createAsyncThunk(
  'user/fetchUser',
	async (_, { rejectWithValue }) => {
    try {
      const response = await getUserMe();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    status: null,
    error: null,
  },
  reducers: {
		updateUser(state, action){
      state.user.position = action.payload.position;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.user.timezone = action.payload.timezone;
    },
		updatePhoto(state, action){
			console.log(action);
			state.users.photo = action.payload.photo;
		}
	},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserMe.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchUserMe.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const {updateUser, updatePhoto} = userSlice.actions;
export default userSlice.reducer;
