import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './jobSlice';
import favouriteJobsSlice from './favouriteJobsSlice';
import cvSlice from './cvSlice';

export default configureStore({
  reducer: {
    jobs: jobSlice,
    favouriteJobs: favouriteJobsSlice,
    cv: cvSlice,
  },
});
