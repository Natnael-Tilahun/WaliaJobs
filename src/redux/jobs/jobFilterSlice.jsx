import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workMode: [],
  location: [],
  experience: 0,
  department: [],
  companyType: [],
};

const actionTypes = (() => {
  const SET_JOB_FILTERS_BY_WORKMODE = "SET_JOB_FILTERS_BY_WORKMODE";
  const SET_JOB_FILTERS_BY_LOCATION = "SET_JOB_FILTERS_BY_LOCATION";
  const SET_JOB_FILTERS_BY_EXPERIENCE = "SET_JOB_FILTERS_BY_EXPERIENCE";
  const SET_JOB_FILTERS_BY_COMPANYTYPE = "SET_JOB_FILTERS_BY_COMPANYTYPE";
  const JOB_FILTERS_BY_DEPARTMENT = "JOB_FILTERS_BY_DEPARTMENT";
  const CLEAR_JOB_FILTERS = "CLEAR_JOB_FILTERS";
  const CLEAR_COMPANY_FILTERS = "CLEAR_COMPANY_FILTERS";


  return {
    SET_JOB_FILTERS_BY_WORKMODE,
    SET_JOB_FILTERS_BY_LOCATION,
    SET_JOB_FILTERS_BY_EXPERIENCE,
    SET_JOB_FILTERS_BY_COMPANYTYPE,
    JOB_FILTERS_BY_DEPARTMENT,
    CLEAR_JOB_FILTERS,
    CLEAR_COMPANY_FILTERS
  };
})();

const jobFilterSlice = createSlice({
  name: "jobFilterSlice",
  initialState,
  reducers: {
    SET_JOB_FILTERS_BY_WORKMODE(state, action) {
      const workMode = action.payload;
      if (state.workMode.includes(workMode)) {
        return {
          ...state,
          workMode: state.workMode.filter((work) => work != workMode),
        };
      } else {
        state.workMode.push(workMode);
      }
    },
    SET_JOB_FILTERS_BY_LOCATION(state, action) {
      const location = action.payload;
      if (state.location.includes(location)) {
        return {
          ...state,
          location: state.location.filter((loc) => loc != location),
        };
      } else {
        state.location.push(location);
      }
    },
    SET_JOB_FILTERS_BY_EXPERIENCE(state, action) {
      const experience = action.payload;
      state.experience = experience;
    },
    SET_JOB_FILTERS_BY_DEPARTMENT(state, action) {
      const department = action.payload;
      if (state.department.includes(department)) {
        return {
          ...state,
          department: state.department.filter((dep) => dep != department),
        };
      } else {
        state.department.push(department);
      }
    },
    SET_JOB_FILTERS_BY_COMPANYTYPE(state, action) {
      const companyType = action.payload;
      if (state.companyType.includes(companyType)) {
        return {
          ...state,
          companyType: state.companyType.filter((ct) => ct != companyType),
        };
      } else {
        state.companyType.push(companyType);
      }
    },
    CLEAR_JOB_FILTERS(state, action) {
      return { ...initialState };
    },
    CLEAR_COMPANY_FILTERS(state,action){
      return{
        ...state,
        companyType: []
      }
    }
  },
});

export const {
  SET_JOB_FILTERS_BY_WORKMODE,
  SET_JOB_FILTERS_BY_COMPANYTYPE,
  SET_JOB_FILTERS_BY_DEPARTMENT,
  SET_JOB_FILTERS_BY_EXPERIENCE,
  SET_JOB_FILTERS_BY_LOCATION,
  CLEAR_JOB_FILTERS,
  CLEAR_COMPANY_FILTERS
} = jobFilterSlice.actions;
export default jobFilterSlice.reducer;
