import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProjects } from '../utils/ProjectsApi';

export const fetchProjects = createAsyncThunk(
  'projects/fetchprojects',
  async function (_, { rejectWithValue }) {
    try {
      const response = await getProjects();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects = action.payload;
      state.status = 'resolved';
      state.error = null;
    },
    [fetchProjects.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default projectsSlice.reducer;
