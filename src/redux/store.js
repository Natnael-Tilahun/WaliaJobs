import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './jobSlice';

export default configureStore({
  reducer: {
    jobs: jobSlice,
  },
});
