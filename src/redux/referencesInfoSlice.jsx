import { createSlice } from '@reduxjs/toolkit';

const initialState = ['html', 'css', 'javascript'];

const actionTypes = (() => {
  const SET_REFERENCES = 'referencesInfo/SET_REFERENCES';
  const CLEAR_CV_DATA = 'referencesInfo/CLEAR_CV_DATA';
  return {
    SET_REFERENCES,
    CLEAR_CV_DATA,
  };
})();
const referencesInfoSlice = createSlice({
  name: 'referencesInfo',
  initialState,
  reducers: {
    [actionTypes.SET_REFERENCES](state, action) {
      state.references = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_REFERENCES, CLEAR_CV_DATA } = referencesInfoSlice.actions;
export default referencesInfoSlice.reducer;
