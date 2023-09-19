import { createSlice } from "@reduxjs/toolkit";
import saveStateToLocalStorage from "../../utils/helperFunctions/saveStateToLocalStorage";
import { act } from "react-dom/test-utils";

const savedFilterations = JSON.parse(localStorage.getItem("filteration"));
let initialState;
const params = new URLSearchParams();
console.log("params", savedFilterations);

if (savedFilterations == null) {
  initialState = {
    workMode: [],
    location: [],
    experience: 0,
    department: [],
    companyType: [],
    searchValue: "",
  };
} else {
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
  const SET_JOB_FILTERS_BY_SEARCH_VALUE = "SET_JOB_FILTERS_BY_SEARCH_VALUE";
  const CLEAR_JOB_FILTERS = "CLEAR_JOB_FILTERS";
  const CLEAR_COMPANY_FILTERS = "CLEAR_COMPANY_FILTERS";

  return {
    SET_JOB_FILTERS_BY_WORKMODE,
    SET_JOB_FILTERS_BY_LOCATION,
    SET_JOB_FILTERS_BY_EXPERIENCE,
    SET_JOB_FILTERS_BY_COMPANYTYPE,
    SET_JOB_FILTERS_BY_SEARCH_VALUE,
    JOB_FILTERS_BY_DEPARTMENT,
    CLEAR_JOB_FILTERS,
    CLEAR_COMPANY_FILTERS,
  };
})();

const jobFilterSlice = createSlice({
  name: "jobFilterSlice",
  initialState,
  reducers: {
    SET_JOB_FILTERS_BY_WORKMODE(state, action) {
      const workMode = action.payload;
      if (state.workMode.includes(workMode)) {
        const currentState = {
          ...state,
          workMode: state.workMode.filter((work) => work != workMode),
        };
        saveStateToLocalStorage("filteration", currentState);
        return currentState;
      } else {
        state.workMode.push(workMode);
        // state.workMode.forEach((val) => {
        //   params.append("workMode", val); // Append each value to the 'workMode' parameter
        // });
        // const searchString = params.toString()
        // const newUrl = state.workMode.length
        //   ? window.location.href + "&" + searchString
        //   : window.location.pathname + "?" + searchString;
        // window.history.replaceState(null, null, newUrl);
        // console.log("paramss", newUrl)
        saveStateToLocalStorage("filteration", state);
      }
    },
    SET_JOB_FILTERS_BY_LOCATION(state, action) {
      const location = action.payload;
      if (state.location.includes(location)) {
        const currentState = {
          ...state,
          location: state.location.filter((loc) => loc != location),
        };
        saveStateToLocalStorage("filteration", currentState);
        return currentState;
      } else {
        state.location.push(location);
        saveStateToLocalStorage("filteration", state);
      }
    },
    SET_JOB_FILTERS_BY_EXPERIENCE(state, action) {
      const experience = action.payload;
      state.experience = experience;
      saveStateToLocalStorage("filteration", state);
    },

    SET_JOB_FILTERS_BY_DEPARTMENT(state, action) {
      const department = action.payload;
      if (state.department.includes(department)) {
        const currentState = {
          ...state,
          department: state.department.filter((dep) => dep != department),
        };
        saveStateToLocalStorage("filteration", currentState);
        return currentState;
      } else {
        state.department.push(department);
        saveStateToLocalStorage("filteration", state);
      }
    },

    SET_JOB_FILTERS_BY_COMPANYTYPE(state, action) {
      const companyType = action.payload;
      if (state.companyType.includes(companyType)) {
        const currentState = {
          ...state,
          companyType: state.companyType.filter((ct) => ct != companyType),
        };
        saveStateToLocalStorage("filteration", currentState);
        return currentState;
      } else {
        state.companyType.push(companyType);
        saveStateToLocalStorage("filteration", state);
      }
    },
    SET_JOB_FILTERS_BY_SEARCH_VALUE(state, action) {
      const searchValue = action.payload;
      state.searchValue = searchValue;
    },
    CLEAR_JOB_FILTERS() {
      localStorage.clear();
      return {
        workMode: [],
        location: [],
        experience: 0,
        department: [],
        companyType: [],
      };
    },
    CLEAR_COMPANY_FILTERS(state, action) {
      const currentState = {
        ...state,
        companyType: [],
      };
      localStorage.setItem("filteration", currentState);
      return currentState;
    },
  },
});

export const {
  SET_JOB_FILTERS_BY_WORKMODE,
  SET_JOB_FILTERS_BY_COMPANYTYPE,
  SET_JOB_FILTERS_BY_DEPARTMENT,
  SET_JOB_FILTERS_BY_EXPERIENCE,
  SET_JOB_FILTERS_BY_LOCATION,
  SET_JOB_FILTERS_BY_SEARCH_VALUE,
  CLEAR_JOB_FILTERS,
  CLEAR_COMPANY_FILTERS,
} = jobFilterSlice.actions;
export default jobFilterSlice.reducer;
