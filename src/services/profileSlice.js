import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getToken } from '../utils/TokenApi';

export const fetchToken = createAsyncThunk(
  'profile/fetchToken',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await getToken(email, password);
      localStorage.setItem('refreshToken', response.refresh);
      localStorage.setItem('accessToken', response.access);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
