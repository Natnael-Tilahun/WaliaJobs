import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

const actionTypes = (() => {
  const SET_FULLNAME = 'SET_FULLNAME';
  const SET_EMAIL = 'SET_EMAIL';
  const SET_PHONE = 'SET_PHONE';
  const SET_PASSWORD = 'SET_PASSWORD';
  const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
  return {
    SET_FULLNAME,
    SET_EMAIL,
    SET_PHONE,
    SET_PASSWORD,
    SET_CONFIRM_PASSWORD,
  };
})();

const signupFormSlice = createSlice({
  name: 'signupForm',
  initialState,
  reducers: {
    [actionTypes.SET_FULLNAME](state, action) {
      state.fullName = action.payload;
    },
    [actionTypes.SET_EMAIL](state, action) {
      state.email = action.payload;
    },
    [actionTypes.SET_PHONE](state, action) {
      state.phone = action.payload;
    },
    [actionTypes.SET_PASSWORD](state, action) {
      state.password = action.payload;
    },
    [actionTypes.SET_CONFIRM_PASSWORD](state, action) {
      state.confirmPassword = action.payload;
    },
  },
});

export const {
  SET_FULLNAME,
  SET_EMAIL,
  SET_PHONE,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
} = signupFormSlice.actions;
export default signupFormSlice.reducer;
