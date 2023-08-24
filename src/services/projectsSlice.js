import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getProjects,
  createProject,
  updateProject,
} from '../utils/ProjectsApi';
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
  async (data, { rejectWithValue }) => {
    const newProject = {
      title: data.title,
      date_start: data.date_start ? data.date_start : null,
      date_finish: data.date_finish ? data.date_finish : null,
      is_active: true,
      users: data.users,
    };
    try {
      const response = await createProject(newProject);
      return response;
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

export const updateProjectId = createAsyncThunk(
  'projects/updateProjectId',
  async ({ project_id, data }, { rejectWithValue }) => {
    try {
      const response = await updateProject({ project_id, data });
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
      })
      .addCase(createNewProjects.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createNewProjects.fulfilled, (state, action) => {
        state.projects = [...state.projects, action.payload];
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(createNewProjects.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(updateProjectId.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateProjectId.fulfilled, (state, action) => {
        console.log(action.payload);
        state.projects = state.projects.map((item) => {
          if (item.id == action.payload.id) {
            item = action.payload;
          }
          return item;
        });

				// state.projects = [
        //   ...state.projects.filter((item) => item.id !== action.payload.id),
        //   action.payload,
        // ];

        state.status = 'resolved';
        state.error = null;
      })
      .addCase(updateProjectId.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { addProjectReducer, addUsersToCreateReducer } =
  projectsSlice.actions;
export default projectsSlice.reducer;
