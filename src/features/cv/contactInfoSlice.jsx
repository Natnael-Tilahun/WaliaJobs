import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  country: "",
  phone: "",
  email: "",
};

const actionTypes = (() => {
  const SET_CITY = "SET_CITY";
  const SET_COUNTRY = "SET_COUNTRY";
  const SET_PHONE = "SET_PHONE";
  const SET_EMAIL = "SET_EMAIL";
  const CLEAR_CV_DATA = "CLEAR_CV_DATA";
  return {
    SET_CITY,
    SET_COUNTRY,
    SET_PHONE,
    SET_EMAIL,
    CLEAR_CV_DATA,
  };
})();
const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {
    [actionTypes.SET_CITY](state, action) {
      state.city = action.payload;
    },
    [actionTypes.SET_COUNTRY](state, action) {
      state.country = action.payload;
    },
    [actionTypes.SET_PHONE](state, action) {
      state.phone = action.payload;
    },
    [actionTypes.SET_EMAIL](state, action) {
      state.email = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_CITY, SET_COUNTRY, SET_PHONE, SET_EMAIL, CLEAR_CV_DATA } =
  contactInfoSlice.actions;
export default contactInfoSlice.reducer;
