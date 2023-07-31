import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const actionTypes = (() => {
  const SET_ACHIEVEMENTS = 'achievementsInfo/SET_ACHIEVEMENTS';
  const CLEAR_CV_DATA = 'achievementsInfo/CLEAR_CV_DATA';
  return {
    SET_ACHIEVEMENTS,
    CLEAR_CV_DATA,
  };
})();
const achievementsInfoSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    [actionTypes.SET_ACHIEVEMENTS](state, action) {
      state.achievements = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_ACHIEVEMENTS, CLEAR_CV_DATA } =
  achievementsInfoSlice.actions;
export default achievementsInfoSlice.reducer;
