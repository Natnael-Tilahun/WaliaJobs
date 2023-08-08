import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const actionTypes = (() => {
  const SET_CERTIFICATION = 'SET_CERTIFICATION';
  const UPDATE_CERTIFICATE = 'UPDATE_CERTIFICATE';
  const DELETE_CERTIFICATE = 'DELETE_CERTIFICATE';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_CERTIFICATION,
    UPDATE_CERTIFICATE,
    DELETE_CERTIFICATE,
    CLEAR_CV_DATA,
  };
})();
const certificationInfoSlice = createSlice({
  name: 'certificationInfo',
  initialState,
  reducers: {
    [actionTypes.SET_CERTIFICATION](state, action) {
      alert('Certification info submitted');
      state.push(action.payload);
    },
    [actionTypes.UPDATE_CERTIFICATE](state, action) {
      const { id, values } = action.payload;
      const index = state.findIndex((cert) => cert.id == id);
      state[index] = values;
      console.log('updatedd cert', state);
      return state;
    },
    [actionTypes.DELETE_CERTIFICATE](state, action) {
      // alert(action.payload);
      const index = state.findIndex((cert) => cert.id === action.payload);
      return state.filter((_, i) => i !== index); // payload is index
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const {
  SET_CERTIFICATION,
  UPDATE_CERTIFICATE,
  DELETE_CERTIFICATE,
  CLEAR_CV_DATA,
} = certificationInfoSlice.actions;
export default certificationInfoSlice.reducer;
