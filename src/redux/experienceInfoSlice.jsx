import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const actionTypes = (() => {
  const SET_EXPERIENCE = 'SET_EXPERIENCE';
  const SET_EXPERIENCE_DETAILS = 'SET_EXPERIENCE_DETAILS';
  const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
  const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_EXPERIENCE,
    SET_EXPERIENCE_DETAILS,
    UPDATE_EXPERIENCE,
    DELETE_EXPERIENCE,
    CLEAR_CV_DATA,
  };
})();
const experienceInfoSlice = createSlice({
  name: 'experienceInfo',
  initialState,
  reducers: {
    [actionTypes.SET_EXPERIENCE](state, action) {
      alert(state.length);
      state.push({ ...action.payload, id: state.length });
    },
    [actionTypes.SET_EXPERIENCE_DETAILS](state, action) {
      const latestExperience = state[state.length - 1];
      console.log('state', latestExperience);
      if (latestExperience) {
        latestExperience.responsibilities = action.payload;
      }
    },
    [actionTypes.UPDATE_EXPERIENCE](state, action) {
      const { index, workExp } = action.payload;
      state[index] = workExp;
    },
    [actionTypes.DELETE_EXPERIENCE](state, action) {
      return state.filter((_, i) => i !== action.payload); // payload is index
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
  extraReducers: {},
});

export const {
  SET_EXPERIENCE,
  SET_EXPERIENCE_DETAILS,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  CLEAR_CV_DATA,
} = experienceInfoSlice.actions;
export default experienceInfoSlice.reducer;
