import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserMe, setUser, updateAvatar } from '../utils/UserApi';


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
  async ({data}, { rejectWithValue, getState, dispatch}) => {
 const updateData = {
	position: !data.position ? getState().user.user.position : data.position,
	phone: !data.phone? getState().user.user.phone : data.phone,
	timezone: !data.timezone ? getState().user.user.timezone : data.timezone,
	email: !data.email ? getState().user.user.email : data.email,
 };

    try {
      const response = await setUser (updateData);
			if (!response.ok) {
				throw new Error('Can\'t update user. Server error.');
		} else {
			dispatch(reducerUpdateUser(updateData))
		}
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);


export const updatePhoto = createAsyncThunk(
  'user/updatePhoto',
  async (_, { rejectWithValue, getState }) => {
		const data = {
			email: getState().user.user.email,
			photo: getState().user.user.photo,
		}
    try {
      const response = await updateAvatar (data);
			if (!response.ok) {
				throw new Error('Can\'t update user. Server error.');
		}
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
      state.user.email =  action.payload.email;
      state.user.phone =  action.payload.phone;
      state.user.timezone = action.payload.timezone;

    },
    reducerUpdatePhoto(state, action) {
			state.user.photo  = action.payload.photoConvertBase64

    },
		reducerDeletePhoto(state) {
			state.user.photo = ""
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

export const { reducerUpdateUser, reducerUpdatePhoto, reducerDeletePhoto } = userSlice.actions;
export default userSlice.reducer;
