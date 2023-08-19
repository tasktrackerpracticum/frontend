import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProjects, createProject } from '../utils/ProjectsApi';
import { addUserInProject } from '../utils/UsersApi';

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

export const createNewProjects = createAsyncThunk(
  'projects/createProjects',
  async (data, { rejectWithValue, dispatch }) => {
    const newProject = {
      title: data.title,
      date_start: data.date_start ? data.date_start : null,
      date_finish: data.date_finish ? data.date_finish : null,
      is_active: true,
			users: data.users


    };
    try {
      const response = await createProject(newProject);
      const data = response.json();
      dispatch(addProjectReducer(data));
      if (!response.ok) {
        throw new Error("Can't add project. Server error.");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addUserProject = createAsyncThunk(
  'projects/addUser',
  async ({ performer, projectId }, { rejectWithValue }) => {
    const data = {
      email: performer.email,
      projectId: projectId,
      role: 'user',
    };
    try {
      const response = await addUserInProject(data);
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
    listUsersToCreateProject: [],
    status: null,
    error: null,
  },
  reducers: {
    addProjectReducer(state, action) {
			const creator = [
				{user: action.payload.currentUser,
					role: 'pm'}
			]
      state.projects.push({
        id: state.projects.length + 1,
        title: action.payload.data.title,
        date_finish: action.payload.data.date_finish
          ? action.payload.data.date_finish
          : null,
        is_active: true,
        date_start: action.payload.data.date_start
          ? action.payload.data.date_start
          : null,
				users: creator
      });

    },
    addUsersToCreateReducer(state, action) {
			state.listUsersToCreateProject = action.payload;
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

export const { addProjectReducer, addUsersToCreateReducer } =
  projectsSlice.actions;
export default projectsSlice.reducer;
