import { configureStore } from '@reduxjs/toolkit';
import projectsSlice from './projectsSlice';
import profileSlice from './profileSlice';
import tasksSlice from './tasksSlice';
import usersSlice from './usersSlice';

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
    profile: profileSlice,
    tasks: tasksSlice,
		users: usersSlice,
  },
});
