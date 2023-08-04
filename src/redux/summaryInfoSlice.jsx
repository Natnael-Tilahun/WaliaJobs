import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  summary: '',
};
const actionTypes = (() => {
  const SET_SUMMARY = 'SET_SUMMARY';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
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
