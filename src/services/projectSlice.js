import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProject } from '../utils/ProjectsApi';

export const fetchProject = createAsyncThunk(
  'project/fetchProject',
  async ({projectId}, { rejectWithValue }) => {
    try {
      const response = await getProject(projectId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);


const projectSlice = createSlice({
  name: 'project',
  initialState: {
    project: {},
    status: null,
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProject.fulfilled, (state, action) => {
        state.project = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchProject.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
