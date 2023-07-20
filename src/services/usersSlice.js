import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers, getUserMe } from '../utils/UsersApi';

export const fetchUsers = createAsyncThunk(
  'users/fetchToken',
	async (_, { rejectWithValue }) => {
    try {
      const response = await getUsers();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchUserMe = createAsyncThunk(
  'users/fetchToken',
	async (_, { rejectWithValue }) => {
    try {
      const response = await getUserMe();
			console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);




const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  reducers: {

	},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
