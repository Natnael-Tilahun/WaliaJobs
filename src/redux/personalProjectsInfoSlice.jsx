import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const actionTypes = (() => {
  const SET_PERSONAL_PROJECTS = 'personalProjectsInfo/SET_PERSONAL_PROJECTS';
  const CLEAR_CV_DATA = 'personalProjectsInfo/CLEAR_CV_DATA';
  return {
    SET_PERSONAL_PROJECTS,
    CLEAR_CV_DATA,
  };
})();

const personalProjectsInfoSlice = createSlice({
  name: 'personalProjectsInfo',
  initialState,
  reducers: {
    [actionTypes.SET_PERSONAL_PROJECTS](state, action) {
      state.personalProjects = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_PERSONAL_PROJECTS, CLEAR_CV_DATA } =
  personalProjectsInfoSlice.actions;
export default personalProjectsInfoSlice.reducer;
