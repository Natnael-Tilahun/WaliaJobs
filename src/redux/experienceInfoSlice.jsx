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
      // alert(state.length);
      // state.push({ ...action.payload, id: state.length });
      state.push(action.payload);
    },

    [actionTypes.SET_EXPERIENCE_DETAILS](state, action) {
      console.log('acitons', action.payload);
      const latestExperience = state[state.length - 1];
      // alert(state.length);
      const { id, values } = action.payload;
      // console.log('state', latestExperience);
      // if (state.length == 0) {
      //   latestExperience.responsibilities = values;
      // } else {
      alert('Experience detail submitted.');
      const index = state.findIndex((exp) => exp.id == id);
      state[index].responsibilities = values;
      // }
    },
    [actionTypes.UPDATE_EXPERIENCE](state, action) {
      const { id, values } = action.payload;
      const index = state.findIndex((exp) => exp.id == id);
      console.log('update id', id, 'update exp', values, 'index', index);
      state[index] = values;
      console.log('updatedd expp', state);
      return state;
    },
    [actionTypes.DELETE_EXPERIENCE](state, action) {
      // alert(action.payload);
      const index = state.findIndex((exp) => exp.id === action.payload);
      return state.filter((_, i) => i !== index); // payload is index
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
