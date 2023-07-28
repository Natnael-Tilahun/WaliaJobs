import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { JobsData } from '../../data/jobs';

const initialState = {
  jobsList: JobsData,
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    toogleFavorite(state, action){
      const jobId = action.payload;
      state.jobs = state.jobsList.map(job => {
        if (job.id === jobId) {
          job.isFavorite = !job.isFavorite;
        }
        return job;
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getJobsData.fulfilled, (state, action) => {
      console.log('action.payload');
      state.jobsList = action.payload;
    });
  },
});

export default jobSlice.reducer;
export const {toogleFavorite} = jobSlice.actions

export const getJobsData = createAsyncThunk('jobs/get', async () => {
  return JobsData;
});
