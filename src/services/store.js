import { configureStore } from '@reduxjs/toolkit';

import projectsSlice from './projectsSlice';
import profileSlice from './profileSlice';

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
    profile: profileSlice,
  },
});
