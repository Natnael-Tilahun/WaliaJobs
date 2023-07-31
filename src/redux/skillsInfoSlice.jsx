import { createSlice } from '@reduxjs/toolkit';

const initialState = ['html', 'css', 'javascript'];

const actionTypes = (() => {
  const SET_SKILLS = 'skillsInfo/SET_SKILLS';
  const CLEAR_CV_DATA = 'personalInfo/CLEAR_CV_DATA';
  return {
    SET_SKILLS,
    CLEAR_CV_DATA,
  };
})();
const skillsInfoSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    [actionTypes.SET_SKILLS](state, action) {
      state.skills = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_SKILLS, CLEAR_CV_DATA } = skillsInfoSlice.actions;
export default skillsInfoSlice.reducer;
