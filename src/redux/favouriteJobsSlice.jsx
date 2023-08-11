import { createSlice } from '@reduxjs/toolkit';
import { toogleFavorite } from './jobSlice';
import { useDispatch } from 'react-redux';

// const dispatch = useDispatch()

const initialState = {
  favouriteJobs: [], // array of job ids that are marked as favorite by the user
};
const favouriteJobsSlice = createSlice({
  name: 'favouriteJobs',
  initialState,
  reducers: {
    addFavouriteJob(state, action) {
      const job = action.payload;
      // console.log(action);
      const jobAlreadyFavourite = state.favouriteJobs.some(
        (item) => item.id === job.id
      );
      if (!jobAlreadyFavourite) {
        // alert(job.id);
        toogleFavorite(job.id);
        state.favouriteJobs.push(job);
      }
    },
    removeFavouriteJobs(state, { payload }) {
      return {
        ...state,
        favouriteJobs: state.favouriteJobs.filter((job) => job.id !== payload),
      };
    },
  },
});

export const { addFavouriteJob, removeFavouriteJobs } =
  favouriteJobsSlice.actions;
export default favouriteJobsSlice.reducer;
