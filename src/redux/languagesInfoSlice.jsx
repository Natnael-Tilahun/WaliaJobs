import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const actionTypes = (() => {
  const SET_LANGUAGES = 'languagesInfo/SET_LANGUAGES';
  const CLEAR_CV_DATA = 'languagesInfo/CLEAR_CV_DATA';
  return {
    SET_LANGUAGES,
    CLEAR_CV_DATA,
  };
})();
const languagesInfoSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    [actionTypes.SET_LANGUAGES](state, action) {
      state.languages = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_LANGUAGES, CLEAR_CV_DATA } = languagesInfoSlice.actions;
export default languagesInfoSlice.reducer;
