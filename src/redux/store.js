import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './jobSlice';
import favouriteJobsSlice from './favouriteJobsSlice';

export default configureStore({
  reducer: {
    jobs: jobSlice,
    favouriteJobs: favouriteJobsSlice
  },
});
