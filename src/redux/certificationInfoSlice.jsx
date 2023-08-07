import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  certificationName: '',
  certificateIssuedBy: '',
  certificateIssuedDate: '',
};

const actionTypes = (() => {
  const SET_CERTIFICATION_NAME = 'SET_CERTIFICATION_NAME';
  const SET_CERTIFICATE_ISSUED_BY = 'SET_CERTIFICATE_ISSUED_BY';
  const SET_CERTIFICATE_ISSUED_DATE = 'SET_CERTIFICATE_ISSUED_DATE';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_CERTIFICATION_NAME,
    SET_CERTIFICATE_ISSUED_BY,
    SET_CERTIFICATE_ISSUED_DATE,
    CLEAR_CV_DATA,
  };
})();
const certificationInfoSlice = createSlice({
  name: 'certificationInfo',
  initialState,
  reducers: {
    [actionTypes.SET_CERTIFICATION_NAME](state, action) {
      alert('Certification info submitted');
      state.certificationName = action.payload;
    },
    [actionTypes.SET_CERTIFICATE_ISSUED_BY](state, action) {
      state.certificateIssuedBy = action.payload;
    },
    [actionTypes.SET_CERTIFICATE_ISSUED_DATE](state, action) {
      state.certificateIssuedDate = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const {
  SET_CERTIFICATION_NAME,
  SET_CERTIFICATE_ISSUED_BY,
  SET_CERTIFICATE_ISSUED_DATE,
  CLEAR_CV_DATA,
} = certificationInfoSlice.actions;
export default certificationInfoSlice.reducer;
