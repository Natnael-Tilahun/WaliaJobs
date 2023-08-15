import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emali: '',
  password: '',
};

const actionTypes = (() => {
  const SET_EMAIL = 'SET_EMAIL';
  const SET_PASSWORD = 'SET_PASSWORD';

  return {
    SET_EMAIL,
    SET_PASSWORD,
  };
})();

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    [actionTypes.SET_EMAIL](state, action) {
      state.emali = action.payload;
    },
    [actionTypes.SET_PASSWORD](state, action) {
      state.password = action.payload;
    },
  },
});

export const { SET_EMAIL, SET_PASSWORD } = loginFormSlice.actions;
export default loginFormSlice.reducer;
