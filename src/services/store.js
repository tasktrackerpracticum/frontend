import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import projectsSlice from './projectsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
  },
});
