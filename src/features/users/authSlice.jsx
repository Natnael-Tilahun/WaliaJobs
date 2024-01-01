import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  name: "",
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
          name: action.payload.name,
        })
      );
      state.userId = action.payload.userId;
      state.name = action.payload.name;
    },
    [actionTypes.SET_LOGOUT](state, action) {
      localStorage.clear();
      state.userId = "";
      state.name = "";
    },
    [actionTypes.SELECT_AUTH](state) {
      const token = state.token || null; // Return null if token doesn't exist
      return token;
    },
  },
});

export const { SET_USER, SET_LOGOUT, SELECT_AUTH } = authSlice.actions;
export default authSlice.reducer;
