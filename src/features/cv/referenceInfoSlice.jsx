import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const actionTypes = (() => {
  const SET_REFERENECES = 'SET_REFERENECES';
  const UPDATE_REFERENECE = 'UPDATE_REFERENECE';
  const DELETE_REFERENECE = 'DELETE_REFERENECE';

  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_REFERENECES,
    UPDATE_REFERENECE,
    DELETE_REFERENECE,
    CLEAR_CV_DATA,
  };
})();
const referenceInfoSlice = createSlice({
  name: 'referenceInfo',
  initialState,
  reducers: {
    [actionTypes.SET_REFERENECES](state, action) {
      state.push(action.payload);
    },
    [actionTypes.UPDATE_REFERENECE](state, action) {
      const { id, values } = action.payload;
      const index = state.findIndex((ref) => ref.id == id);
      state[index] = values;
      // console.log('updatedd ref', state);
      return state;
    },
    [actionTypes.DELETE_REFERENECE](state, action) {
      const index = state.findIndex((ref) => ref.id === action.payload);
      return state.filter((_, i) => i !== index); // payload is index
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const {
  SET_REFERENECES,
  UPDATE_REFERENECE,
  DELETE_REFERENECE,
  CLEAR_CV_DATA,
} = referenceInfoSlice.actions;
export default referenceInfoSlice.reducer;
