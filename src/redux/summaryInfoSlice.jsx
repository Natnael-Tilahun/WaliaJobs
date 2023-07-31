import { createSlice } from '@reduxjs/toolkit';

const initialState =
  'Experienced software engineer with a focus on web development and a passion for creating scalable and efficient applications.';

const actionTypes = (() => {
  const SET_SUMMARY = 'summaryInfo/SET_SUMMARY';
  const CLEAR_CV_DATA = 'summaryInfo/CLEAR_CV_DATA';
  return {
    SET_SUMMARY,
    CLEAR_CV_DATA,
  };
})();
const summaryInfoSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    [actionTypes.SET_SUMMARY](state, action) {
      state.summary = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_SUMMARY, CLEAR_CV_DATA } = summaryInfoSlice.actions;
export default summaryInfoSlice.reducer;
