import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTasks } from '../utils/tasksApi';
import { MockTasks } from '../constatnts/constants';

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
    tasks: MockTasks,
    status: null,
    error: null,
  },
  reducers: {
    updateColumn(state, action) {
      state.tasks.map((task) => {
        task.id === action.payload.id
          ? { ...(task.column = action.payload.column) }
          : task;
      });
    },
  },
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

export const { updateColumn } = tasksSlice.actions;
export default tasksSlice.reducer;
