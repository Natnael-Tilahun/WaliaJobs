import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { JobsData } from '../../data/jobs';

const initialState = {
  jobsList: JobsData,
  filters: {
    location: '',
    experience: '',
    workMode: '',
    department: '',
    companyType: '',
  },
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    toogleFavorite(state, action) {
      // alert('toggle');
      const jobId = action.payload;
      state.jobs = state.jobsList.map((job) => {
        if (job.id === jobId) {
          job.isFavorite = !job.isFavorite;
        }
        return job;
      });
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getJobsData.fulfilled, (state, action) => {
      // console.log('action.payload');
      state.jobsList = action.payload;
    });
  },
});

export default jobSlice.reducer;
export const { toogleFavorite, setFilters } = jobSlice.actions;

export const getJobsData = createAsyncThunk('jobs/get', async () => {
  return JobsData;
});
