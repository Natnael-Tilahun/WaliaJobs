import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  token: "",
};

const actionTypes = (() => {
  const SET_USER = "SET_USER";
  const SET_LOGOUT = "SET_LOGOUT";
  const SELECT_AUTH = "SELECT_AUTH";

  // const SET_PASSWORD = "SET_PASSWORD";

  return {
    SET_USER,
    SET_LOGOUT,
    SELECT_AUTH,
  };
})();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    [actionTypes.SET_USER](state, action) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: action.payload.userId,
          token: action.payload.token,
        })
      );
      state.name = action.payload.userId;
      state.token = action.payload.token;
    },
    [actionTypes.SET_LOGOUT](state, action) {
      localStorage.clear();
      (state.userId = ""), (state.token = "");
    },
    [actionTypes.SELECT_AUTH](state) {
      const token = state.token || null; // Return null if token doesn't exist

      return state;
    },
  },
});

export const { SET_USER, SET_LOGOUT, SELECT_AUTH } = authSlice.actions;
export default authSlice.reducer;
