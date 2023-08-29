import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cvLeftSectionBackgroundColor: 'bg-blue-800',
  cvRightSectionBackgroundColor: 'bg-slate-100',
  cvHeaderSectionBackgroundColor: 'bg-gray-600',
  cvLeftSectionTextColor: 'text-slate-200 fill-slate-200',
  cvRightSectionTextColor: 'text-slate-700 fill-slate-700',
  cvHeaderSectionTextColor: 'text-slate-200 fill-slate-200',
};

const actionTypes = (() => {
  const SET_CV_LEFT_SECTION_BACKGROUND_COLOR = 'SET_CV_LEFT_SECTION_BACKGROUND_COLOR';
  const SET_CV_RIGHT_SECTION_BACKGROUND_COLOR = 'SET_CV_RIGHT_SECTION_BACKGROUND_COLOR'
  const SET_CV_HEADER_SECTION_BACKGROUND_COLOR = "SET_CV_HEADER_SECTION_BACKGROUND_COLOR"
  const SET_CV_LEFT_SECTION_TEXT_COLOR = "SET_CV_LEFT_SECTION_TEXT_COLOR"
  const SET_CV_RIGHT_SECTION_TEXT_COLOR = "SET_CV_RIGHT_SECTION_TEXT_COLOR"
  const SET_CV_HEADER_SECTION_TEXT_COLOR = "SET_CV_HEADER_SECTION_TEXT_COLOR"
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_CV_LEFT_SECTION_BACKGROUND_COLOR,
    SET_CV_RIGHT_SECTION_BACKGROUND_COLOR,
    SET_CV_HEADER_SECTION_BACKGROUND_COLOR,
    SET_CV_LEFT_SECTION_TEXT_COLOR,
    SET_CV_RIGHT_SECTION_TEXT_COLOR,
    SET_CV_HEADER_SECTION_TEXT_COLOR,
    CLEAR_CV_DATA,
  };
})();

const cvThemeSlice = createSlice({
  name: 'cvTheme',
  initialState,
  reducers: {
    [actionTypes.SET_CV_LEFT_SECTION_BACKGROUND_COLOR](state, action) {
      state.cvLeftSectionBackgroundColor = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_CV_LEFT_SECTION_BACKGROUND_COLOR, CLEAR_CV_DATA } = cvThemeSlice.actions;
export default cvThemeSlice.reducer;
