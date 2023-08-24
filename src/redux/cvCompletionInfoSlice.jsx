import { createSlice } from '@reduxjs/toolkit';
import { FormSections } from '../utils/FormSections';

const initialState = {
  [FormSections.HEADING]: {
    completed: false,
    included: true,
  },
  [FormSections.EDUCATION]: {
    completed: false,
    included: false,
  },
  [FormSections.EXPERIENCE]: {
    completed: false,
    included: true,
  },
  [FormSections.SKILLS]: {
    completed: false,
    included: true,
  },
  [FormSections.CERTIFICATIONS]: {
    completed: false,
    included: true,
  },
  [FormSections.LANGUAGES]: {
    completed: false,
    included: true,
  },
  [FormSections.REFERENCES]: {
    completed: false,
    included: true,
  },
  [FormSections.ACHIEVEMENTS]: {
    completed: false,
    included: true,
  },
  [FormSections.INTERESTS]: {
    completed: false,
    included: true,
  },
  [FormSections.SUMMARY]: {
    completed: false,
    included: true,
  },
  [FormSections.ADDADDITIONALSECTION]: {
    completed: false,
    included: true,
  },
  [FormSections.FINALIZE]: {
    completed: false,
    included: true,
  },
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
      state[action.payload].completed = true;
      return state;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_COMPLETED, CLEAR_CV_DATA } = cvCompletionInfoSlice.actions;
export default cvCompletionInfoSlice.reducer;
