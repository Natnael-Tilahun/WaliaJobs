import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { JobsData } from '../../data/jobs';

const initialState = {
  jobsList: [JobsData],
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobsData.fulfilled, (state, action) => {
      console.log('action.payload');
      state.jobsList = action.payload;
    });
  },
});

export default jobSlice.reducer;

export const getJobsData = createAsyncThunk('jobs/get', async () => {
  return JobsData;
});
