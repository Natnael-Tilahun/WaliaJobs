import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: 'Addis Abeba',
  country: 'Ethiopia',
  postCode: '0000',
  phone: '0933654654',
  email: 'natnaeltilahun97@gmail.com',
};

const actionTypes = (() => {
  const SET_CITY = 'SET_CITY';
  const SET_COUNTRY = 'SET_COUNTRY';
  const SET_POSTCODE = 'SET_POSTCODE';
  const SET_PHONE = 'SET_PHONE';
  const SET_EMAIL = 'SET_EMAIL';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_CITY,
    SET_COUNTRY,
    SET_POSTCODE,
    SET_PHONE,
    SET_EMAIL,
    CLEAR_CV_DATA,
  };
})();
const contactInfoSlice = createSlice({
  name: 'contactInfo',
  initialState,
  reducers: {
    [actionTypes.SET_CITY](state, action) {
      state.city = action.payload;
    },
    [actionTypes.SET_COUNTRY](state, action) {
      state.country = action.payload;
    },
    [actionTypes.SET_POSTCODE](state, action) {
      state.postCode = action.payload;
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

export const {
  SET_CITY,
  SET_COUNTRY,
  SET_POSTCODE,
  SET_PHONE,
  SET_EMAIL,
  CLEAR_CV_DATA,
} = contactInfoSlice.actions;
export default contactInfoSlice.reducer;
