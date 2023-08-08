import { createSlice } from '@reduxjs/toolkit';
import { FormSections } from '../utils/FormSections';

const initialState = {
  [FormSections.HEADING]: false,
  [FormSections.EDUCATION]: false,
  [FormSections.EXPERIENCE]: false,
  [FormSections.SKILLS]: false,
  [FormSections.CERTIFICATIONS]: false,
  [FormSections.LANGUAGES]: false,
  [FormSections.REFERENCES]: false,
  [FormSections.ACHIEVEMENTS]: false,
  [FormSections.INTERESTS]: false,
  [FormSections.SUMMARY]: false,
};

const actionTypes = (() => {
  const SET_COMPLETED = 'SET_COMPLETED';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_COMPLETED,
    CLEAR_CV_DATA,
  };
})();

const cvCompletionInfoSlice = createSlice({
  name: 'cvCompletionInfo',
  initialState,
  reducers: {
    [actionTypes.SET_COMPLETED](state, action) {
      state[action.payload] = true;
      return state;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_COMPLETED, CLEAR_CV_DATA } = cvCompletionInfoSlice.actions;
export default cvCompletionInfoSlice.reducer;
