import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserMe, setUser } from '../utils/UserApi';


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

export const updateUserMe = createAsyncThunk(
  'user/updateUserMe',
  async (_, { rejectWithValue, getState }) => {
		const user = getState().user.user; // текущий стэйт
		console.log(user);
    try {
      const response = await setUser (user);
			console.log(response);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      country: null,
      date_of_birth: null,
      email: null,
      first_name: null,
      gender: null,
      id: null,
      last_name: null,
      phone: null,
      photo: null,
      position: null,
      timezone: null,
      username: null,
    },
    status: null,
    error: null,
  },
  reducers: {
    reducerUpdateUser(state, action) {

      state.user.position = action.payload.position;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.user.timezone = action.payload.timezone;

    },
    reducerupdatePhoto(state, action) {
      console.log(action);
      state.users.photo = action.payload.photo;
    },
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

export const { reducerUpdateUser, reducerupdatePhoto } = userSlice.actions;
export default userSlice.reducer;
