import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const actionTypes = (() => {
  const SET_NAME = 'SET_NAME';
  const SET_EMAIL = 'SET_EMAIL';
  const SET_MESSAGE = 'SET_MESSAGE';

  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_NAME,
    SET_EMAIL,
    SET_MESSAGE,
    CLEAR_CV_DATA,
  };
})();
const contactFormSlice = createSlice({
  name: 'contactFome',
  initialState,
  reducers: {
    [actionTypes.SET_NAME](state, action) {
      state.name = action.payload;
    },
    [actionTypes.SET_EMAIL](state, action) {
      state.email = action.payload;
    },
    [actionTypes.SET_MESSAGE](state, action) {
      state.message = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_NAME, SET_EMAIL, SET_MESSAGE, CLEAR_CV_DATA } =
  contactFormSlice.actions;
export default contactFormSlice.reducer;
