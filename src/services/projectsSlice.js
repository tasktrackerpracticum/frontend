import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProjects } from '../utils/ProjectsApi';
import { MockProjects } from '../constatnts/constants';

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
    projects: MockProjects, //--------- Удалить моковые данные после получения данных с сервера
    status: null,
    error: null,
  },
  reducers: {
    addProject(state, action) {
      console.log(state);
      console.log(action);

      state.projects.push({
        // добавить поле создатателя-автора и поля исполнителей после их подключения в стору
        id: state.projects.length + 1,
        title: action.payload.title,
        date_finish: action.payload.date_finish,
        is_active: false, // не забыть сменить на true
        date_start: action.payload.date_start,
      });
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

export const { addProject } = projectsSlice.actions;
export default projectsSlice.reducer;
