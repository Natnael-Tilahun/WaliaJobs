import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const actionTypes = (() => {
  const SET_LANGUAGE = 'SET_LANGUAGE';
  const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';
  const DELETE_LANGUAGE = 'DELETE_LANGUAGE';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_LANGUAGE,
    UPDATE_LANGUAGE,
    DELETE_LANGUAGE,
    CLEAR_CV_DATA,
  };
})();
const languageInfoSlice = createSlice({
  name: 'languageInfo',
  initialState,
  reducers: {
    [actionTypes.SET_LANGUAGE](state, action) {
      // alert('Language info submitted');
      state.push(action.payload);
    },
    [actionTypes.UPDATE_LANGUAGE](state, action) {
      const { id, values } = action.payload;
      const index = state.findIndex((lang) => lang.id == id);
      state[index] = values;
      // console.log('updatedd lang', state);
      return state;
    },
    [actionTypes.DELETE_LANGUAGE](state, action) {
      // alert(action.payload);
      const index = state.findIndex((lang) => lang.id === action.payload);
      return state.filter((_, i) => i !== index); // payload is index
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_LANGUAGE, UPDATE_LANGUAGE, DELETE_LANGUAGE, CLEAR_CV_DATA } =
  languageInfoSlice.actions;
export default languageInfoSlice.reducer;
