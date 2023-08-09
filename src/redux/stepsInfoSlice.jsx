import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const actionTypes = (() => {
  const INCREMENT_STEP = 'INCREMENT_STEP';
  const DECREMEMT_STEP = 'DECREMEMT_STEP';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    INCREMENT_STEP,
    DECREMEMT_STEP,
    CLEAR_CV_DATA,
  };
})();

const stepsInfoSlice = createSlice({
  name: 'stepsInfo',
  initialState,
  reducers: {
    [actionTypes.INCREMENT_STEP](state, action) {
      return state + 1;
    },
    [actionTypes.DECREMEMT_STEP](state) {
      return state - 1;
    },
  },
});

export const { INCREMENT_STEP, DECREMEMT_STEP } = stepsInfoSlice.actions;
export default stepsInfoSlice.reducer;
