import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProjects } from '../utils/ProjectsApi';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProjects();
      return response;
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
  reducers: {
		addProject(state, action) {
      state.projects.push({
				id: state.projects.length + 1,
				title: action.payload,
				is_active: true,
				date_start: Date.now(),
      }
			);
    },
	},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const {addProject} = projectsSlice.actions;
export default projectsSlice.reducer;
