import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import saveStateToLocalStorage from "../../utils/helperFunctions/saveStateToLocalStorage";

const savedFilterations = JSON.parse(localStorage.getItem('filteration'))
let initialState

if(savedFilterations == null){
  initialState = {
    workMode: [],
    location: [],
    experience: 0,
    department: [],
    companyType: [],
  };
}
else{
  initialState = {
    workMode: savedFilterations.workMode,
    location: savedFilterations.location,
    experience: savedFilterations.experience,
    department: savedFilterations.department,
    companyType: savedFilterations.companyType,
  };
}


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
        const currentState = {  ...state,
          workMode: state.workMode.filter((work) => work != workMode),
        }
        saveStateToLocalStorage('filteration', currentState)
        return currentState
      } else {
        state.workMode.push(workMode);
        saveStateToLocalStorage('filteration', state)
      }
     
    },
    SET_JOB_FILTERS_BY_LOCATION(state, action) {
      const location = action.payload;
      if (state.location.includes(location)) {
        const currentState = {
          ...state,
          location: state.location.filter((loc) => loc != location),
        }
        saveStateToLocalStorage('filteration', currentState)
        return currentState
      } else {
        state.location.push(location);
        saveStateToLocalStorage('filteration', state)
      }
    },
    SET_JOB_FILTERS_BY_EXPERIENCE(state, action) {
      const experience = action.payload;
      state.experience = experience;
      saveStateToLocalStorage('filteration', state)
    },

    SET_JOB_FILTERS_BY_DEPARTMENT(state, action) {
      const department = action.payload;
      if (state.department.includes(department)) {
        const currentState = {
          ...state,
          department: state.department.filter((dep) => dep != department),
        };
        saveStateToLocalStorage('filteration', currentState)
        return currentState
      } else {
        state.department.push(department);
        saveStateToLocalStorage('filteration', state)
      }
    },

    SET_JOB_FILTERS_BY_COMPANYTYPE(state, action) {
      const companyType = action.payload;
      if (state.companyType.includes(companyType)) {
        const currentState = {
          ...state,
          companyType: state.companyType.filter((ct) => ct != companyType),
        };
        saveStateToLocalStorage('filteration', currentState)
        return currentState
      } else {
        state.companyType.push(companyType);
        saveStateToLocalStorage('filteration', state)
      }
    },
    CLEAR_JOB_FILTERS(state, action) {
      return { ...initialState };
    },
    CLEAR_COMPANY_FILTERS(state,action){
      const currentState = {
        ...state,
        companyType: []
      }
      localStorage.setItem("filteration", currentState )
      return currentState
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
