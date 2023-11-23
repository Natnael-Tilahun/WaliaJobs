import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  achievements: "",
};

const actionTypes = (() => {
  const SET_ACHIEVEMENTS = "SET_ACHIEVEMENTS";
  const GET_ACHIEVEMENTS = "GET_ACHIEVEMENTS";
  const CLEAR_CV_DATA = "CLEAR_CV_DATA";
  return {
    SET_ACHIEVEMENTS,
    GET_ACHIEVEMENTS,
    CLEAR_CV_DATA,
  };
})();
const achievementsInfoSlice = createSlice({
  name: "achievementsInfo",
  initialState,
  reducers: {
    [actionTypes.SET_ACHIEVEMENTS](state, action) {
      // alert('Achievements submitted');
      state.achievements = action.payload;
    },
    [actionTypes.GET_ACHIEVEMENTS](state, action) {
      return state.achievements;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_ACHIEVEMENTS, GET_ACHIEVEMENTS, CLEAR_CV_DATA } =
  achievementsInfoSlice.actions;
export default achievementsInfoSlice.reducer;
