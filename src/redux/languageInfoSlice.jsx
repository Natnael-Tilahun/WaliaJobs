import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const actionTypes = (() => {
  const SET_LANGUAGE = 'SET_LANGUAGE';
  const SET_PROFICIENCY_LEVEL = 'SET_PROFICIENCY_LEVEL';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_LANGUAGE,
    CLEAR_CV_DATA,
  };
})();
const languageInfoSlice = createSlice({
  name: 'languageInfo',
  initialState,
  reducers: {
    [actionTypes.SET_LANGUAGE](state, action) {
      alert('Language info submitted');
      state.push(action.payload);
    },

    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_LANGUAGE, CLEAR_CV_DATA } = languageInfoSlice.actions;
export default languageInfoSlice.reducer;
