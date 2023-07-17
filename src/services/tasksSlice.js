import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTasks } from '../utils/tasksApi';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async ({ project_id }, { rejectWithValue }) => {
    try {
      const response = await getTasks(project_id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default tasksSlice.reducer;
