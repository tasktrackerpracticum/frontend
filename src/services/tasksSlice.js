import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTasks, createTask } from '../utils/tasksApi';
import { MockTasks } from '../constatnts/constants';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (project_id, { rejectWithValue }) => {
    try {
      const response = await getTasks(project_id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createNewTask = createAsyncThunk(
  'tasks/createTask',
  async ({ title, deadline, projectId }, { rejectWithValue }) => {
    const newTask = {
      data: {
        title: title,
        column: 'backlog',
        status: 'nonurgent',
        deadline: deadline,
      },
      project_id: projectId,
    };
    try {
      const response = await createTask(newTask);
      const data = response.json();
      console.log('redux', data);

      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }
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
    addTask(state, action) {
      console.log(state);
      console.log(action);
      state.tasks.push({
        id: state.tasks.length + 1,
        title: action.payload.title,
        column: 'backlog',
        status: 'nonurgent',
        deadline: action.payload.deadline,
      });
    },
    updateColumn(state, action) {
      state.tasks.map((task) => {
        task.id === action.payload.id
          ? { ...(task.column = action.payload.column) }
          : task;
      });
    },
    moveTask(state, action) {
      const tasks = [...state.tasks];
      tasks.splice(
        action.payload.to,
        0,
        tasks.splice(action.payload.from, 1)[0],
      );
      return {
        ...state,
        tasks,
      };
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

export const { addTask, updateColumn, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
