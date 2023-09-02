import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  interests: '',
};

const actionTypes = (() => {
  const SET_INTERESTS = 'SET_INTERESTS';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_INTERESTS,
    CLEAR_CV_DATA,
  };
})();

const interestsInfoSlice = createSlice({
  name: 'interestsInfo',
  initialState,
  reducers: {
    [actionTypes.SET_INTERESTS](state, action) {
      state.interests = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_INTERESTS, CLEAR_CV_DATA } = interestsInfoSlice.actions;
export default interestsInfoSlice.reducer;
