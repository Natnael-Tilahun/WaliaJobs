import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  position: "",
  profilePic: "",
};

const actionTypes = (() => {
  const SET_FIRST_NAME = "SET_FIRST_NAME";
  const SET_LAST_NAME = "SET_LAST_NAME";
  const SET_POSITION = "SET_POSITION";
  const SET_PROFILE_PIC = "SET_PROFILE_PIC";
  const CLEAR_CV_DATA = "CLEAR_CV_DATA";

  return {
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_POSITION,
    SET_PROFILE_PIC,
    CLEAR_CV_DATA,
  };
})();
const personalInfoSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    [actionTypes.SET_FIRST_NAME](state, action) {
      // alert('Set personal Info');
      state.firstName = action.payload;
    },
    [actionTypes.SET_PROFILE_PIC](state, action) {
      state.profilePic = action.payload;
    },
    [actionTypes.SET_LAST_NAME](state, action) {
      state.lastName = action.payload;
    },
    [actionTypes.SET_POSITION](state, action) {
      state.position = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_POSITION,
  SET_PROFILE_PIC,
  CLEAR_CV_DATA,
} = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
