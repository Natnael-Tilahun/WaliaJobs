import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import {
  getFilterStateFromStorage,
  clearFilterFromStorage,
  isEmpty,
} from "../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_JOB_FILTERS_BY_WORKMODE,
  SET_JOB_FILTERS_BY_COMPANYTYPE,
  SET_JOB_FILTERS_BY_DEPARTMENT,
  SET_JOB_FILTERS_BY_LOCATION,
  SET_JOB_FILTERS_BY_EXPERIENCE,
  CLEAR_JOB_FILTERS,
} from "../features/jobs/jobFilterSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [workModeExpanded, setWorkModeExpanded] = useState(true);
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [departmentExpanded, setDepartmentExpanded] = useState(false);
  const [companyExpanded, setCompanyExpanded] = useState(false);
  const [locationAccordionExpanded, setLocationAccordionExpanded] =
    useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(window.location.search);

  const filters = useSelector((state) => state.jobFilter);

  const workModeAccordionToggleExpanded = () =>
    setWorkModeExpanded((current) => !current);
  const experienceAccordionToggleExpanded = () =>
    setExperienceExpanded((current) => !current);
  const locationAccordionToggleExpanded = () =>
    setLocationAccordionExpanded((current) => !current);
  const departmentAccordionToggleExpanded = () =>
    setDepartmentExpanded((current) => !current);
  const companyAccordionToggleExpanded = () =>
    setCompanyExpanded((current) => !current);

  // useEffect(() => {
  //   if (workModeCheckboxState.length) {
  //     setSelectedFilters((prevState) => ({
  //       ...prevState,
  //       workMode: workModeCheckboxState,
  //     }));

  //     const params = new URLSearchParams(); // Create a new URLSearchParams object
  //     workModeCheckboxState.forEach((val) => {
  //       params.append("workMode", val); // Append each value to the 'workMode' parameter
  //     });

  //     const searchString = params.toString(); // Get the search string from the URLSearchParams object
  //     const newUrl = window.location.pathname + "?" + searchString;
  //     window.history.replaceState(null, null, newUrl);
  //   }
  //   if (experienceCheckboxState) {
  //     setSelectedFilters((prevState) => ({
  //       ...prevState,
  //       experience: experienceCheckboxState,
  //     }));

  //     const params = new URLSearchParams(); // Create a new URLSearchParams object
  //     // workModeCheckboxState.forEach((val) => {
  //     params.append("experience", experienceCheckboxState); // Append each value to the 'workMode' parameter
  //     // });

  //     const searchString = params.toString(); // Get the search string from the URLSearchParams objectc
  //     const newUrl = workModeCheckboxState.length
  //       ? window.location.href + "&" + searchString
  //       : window.location.pathname + "?" + searchString;
  //     window.history.replaceState(null, null, newUrl);
  //   }
  //   if (locationCheckboxState.length) {
  //     setSelectedFilters((prevState) => ({
  //       ...prevState,
  //       location: locationCheckboxState,
  //     }));

  //     const params = new URLSearchParams(); // Create a new URLSearchParams object
  //     locationCheckboxState.forEach((val) => {
  //       params.append("location", val); // Append each value to the 'workMode' parameter
  //     });

  //     const searchString = params.toString(); // Get the search string from the URLSearchParams object
  //     const newUrl = workModeCheckboxState.length
  //       ? window.location.href + "&" + searchString
  //       : window.location.pathname + "?" + searchString;

  //     window.history.replaceState(null, null, newUrl);
  //   }
  //   if (departmentCheckboxState.length) {
  //     setSelectedFilters((prevState) => ({
  //       ...prevState,
  //       department: departmentCheckboxState,
  //     }));

  //     const params = new URLSearchParams(); // Create a new URLSearchParams object
  //     departmentCheckboxState.forEach((val) => {
  //       params.append("department", val); // Append each value to the 'workMode' parameter
  //     });

  //     const searchString = params.toString(); // Get the search string from the URLSearchParams object
  //     const newUrl =
  //       workModeCheckboxState.length || locationCheckboxState.length
  //         ? window.location.href + "&" + searchString
  //         : window.location.pathname + "?" + searchString;

  //     window.history.replaceState(null, null, newUrl);
  //   }
  //   // Check if department filter is present in the search parameters
  //   else if (selectedFiltersFromSearchParams.departmentFilter.length) {
  //     const decodedDepartmentFilter =
  //       selectedFiltersFromSearchParams.departmentFilter.map((filter) =>
  //         decodeURIComponent(filter)
  //       );
  //     console.log("Yes ther is searhc params====", decodedDepartmentFilter);
  //     setSelectedFilters((prevState) => ({
  //       ...prevState,
  //       department: decodedDepartmentFilter,
  //     }));

  //     const filterState = { ...selectedFilters };
  //     filterState.department = decodedDepartmentFilter;
  //   }

  //   if (companyTypeCheckboxState.length) {
  //     setSelectedFilters((prevState) => ({
  //       ...prevState,
  //       companyType: companyTypeCheckboxState,
  //     }));

  //     const params = new URLSearchParams(); // Create a new URLSearchParams object
  //     companyTypeCheckboxState.forEach((val) => {
  //       params.append("companyType", val); // Append each value to the 'workMode' parameter
  //     });

  //     const searchString = params.toString(); // Get the search string from the URLSearchParams object
  //     const newUrl =
  //       workModeCheckboxState.length ||
  //       locationCheckboxState.length ||
  //       departmentCheckboxState.length
  //         ? window.location.href + "&" + searchString
  //         : window.location.pathname + "?" + searchString;

  //     window.history.replaceState(null, null, newUrl);
  //   } else {
  //     console.log("No data in the local storage");
  //   }
  // }, []);

  function handleFilterChange(key, value) {
    if (key == "workMode") {
      dispatch(SET_JOB_FILTERS_BY_WORKMODE(value));
    }
    if (key == "experience") {
      dispatch(SET_JOB_FILTERS_BY_EXPERIENCE(value));
    }
    if (key == "department") {
      dispatch(SET_JOB_FILTERS_BY_DEPARTMENT(value));
    }
    if (key == "companyType") {
      dispatch(SET_JOB_FILTERS_BY_COMPANYTYPE(value));
    }
    if (key == "location") {
      dispatch(SET_JOB_FILTERS_BY_LOCATION(value));
    }

    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams.toString());
      return params.toString();
    });
  }

  function removeFilterHandler() {
    dispatch(CLEAR_JOB_FILTERS());
    setSearchParams("");
    // clearFilterFromStorage();
  }

  return (
    <div className="flex basis-full md:basis-[35%] dark:text-thm_dark_primary_color  dark:bg-thm_dark_background dark:border-gray-700 lg:basis-[25%] xl:basis-[25%] bg-thm_card items-start rounded-xl h-full flex-wrap md:flex-col border-2 text-thm_primary_color shadow-lg gap-2 lg:gap-3 p-2 md:p-5 lg:p-8 ">
      <div className="flex justify-between w-full items-center">
        <h1 className="border-b-2 text-base font-medium md:text-xl lg:text-xl pb-2 md:pb-4 lg:pb-7 w-full text-left">
          All Filters
        </h1>
        <h1
          onClick={() => {
            removeFilterHandler();
          }}
          className="border-b-2 cursor-pointer hover:text-blue-400 text-base text-right font-medium md:text-lg lg:text-base text-thm_root1_color dark:text-thm_dark_root1_color pb-2 md:pb-4 lg:pb-7 w-full"
        >
          Clear Filters
        </h1>
      </div>
      <div className="flex flex-col mx-auto border-b-2 pb-2 md:pb-5 lg:pb-3 w-full ">
        <div
          className="font-medium md:text-lg text-sm lg:text-base flex items-center justify-between w-full "
          onClick={workModeAccordionToggleExpanded}
        >
          <h1 className="md:text-lg text-base">Work Mode</h1>
          {workModeExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path
                d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                fill=""
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
            </svg>
          )}
        </div>
        <ul
          className={`overflow-hidden transition-[max-height] text-left text-sm text-thm_secondary_color dark:text-thm_dark_secondary_color duration-100 ease-in flex flex-col pt-2 lg:pt-2 gap-2 md:gap-3 lg:gap-4 ${
            workModeExpanded ? "max-h-fit" : "max-h-0 "
          }`}
        >
          <li className="lg:text-base md:text-sm text-xs flex lg:gap-0 ">
            <label htmlFor="office" className=" font-medium  w-full">
              <input
                type="checkbox"
                name="workMode"
                value="In Office"
                id="office"
                className="md:w-4 mr-2"
                checked={
                  filters.workMode.length &&
                  filters.workMode.includes("In Office")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Work from office
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs flex lg:gap-0 ">
            <label htmlFor="remote" className=" font-medium w-full">
              <input
                type="checkbox"
                name="workMode"
                id="remote"
                className="md:w-4 mr-2"
                value="Remote"
                checked={
                  filters.workMode.length && filters.workMode.includes("Remote")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Work from home
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs flex lg:gap-0 ">
            <label htmlFor="hybrid" className="font-medium  w-full">
              <input
                type="checkbox"
                name="workMode"
                id="hybrid"
                className="md:w-4 mr-2"
                value="Hybrid"
                checked={
                  filters.workMode.length && filters.workMode.includes("Hybrid")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Hybrid
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs flex lg:gap-0">
            <label htmlFor="temporary" className="font-medium  w-full">
              <input
                type="checkbox"
                id="temporary"
                name="workMode"
                className="md:w-4 mr-2 "
                value="TWFH"
                checked={
                  filters.workMode.length && filters.workMode.includes("TWFH")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Temp. WFH due to covid
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:gap-1  border-b-2 md:pb-5 lg:pb-5 pb-3 w-full">
        <div
          className="font-medium md:text-xl lg:text-xl flex items-center justify-between w-full"
          onClick={experienceAccordionToggleExpanded}
        >
          <h1 className="font-medium  md:text-lg lg:text-lg text-left">
            Experience
          </h1>
          {experienceExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path
                d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                fill=""
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
            </svg>
          )}
        </div>
        <div
          className={`relative overflow-hidden transition-[max-height] duration-500 ease-in  ${
            experienceExpanded ? "max-h-fit" : "max-h-0 "
          } `}
        >
          <input
            type="range"
            name="experience"
            className="range w-full h-2 bg-gray-700 accent-gray-800 rounded-full outline-none"
            min="0"
            max="30"
            value={filters.experience}
            onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:-mb-2 px-1 md:px-2 py-1  md:py-2 bg-gray-800 dark:bg-thm_secondary_color text-white text-xs md:text-sm rounded">
            <span className="font-bold">{filters.experience}</span>
          </div>
          <div className="flex justify-between text-thm_secondary_color dark:text-thm_dark_secondary_color tracking-wide text-sm md:text-base lg:text-base font-medium">
            <p>O Yr</p>
            <p>30 Yrs</p>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-2 md:gap-3 lg:gap-3 items-start w-full border-b-2 md:pb-5 lg:pb-2">
        <div
          className="font-medium text-xl lg:text-xl flex items-center justify-between w-full"
          onClick={locationAccordionToggleExpanded}
        >
          <h1 className="font-medium text-base lg:text-lg">Location</h1>
          {locationAccordionExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path
                d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                fill=""
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
            </svg>
          )}
        </div>

        <div
          className={`overflow-hidden transition-[max-height] text-left text-thm_secondary_color dark:text-thm_dark_secondary_color duration-500 ease-in flex flex-col gap-2 md:gap-5 ${
            locationAccordionExpanded ? "max-h-full" : "max-h-0 "
          }`}
        >
          <li className="lg:text-base md:text-sm text-xs flex lg:gap-1">
            <label htmlFor="addis abeba" className=" font-medium w-full">
              <input
                type="checkbox"
                name="location"
                value="Addis Abeba"
                id="addis abeba"
                className="md:w-4 mr-2"
                checked={
                  filters.location.length &&
                  filters.location.includes("Addis Abeba")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Addis Abeba
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="hawassa" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Hawassa"
                id="hawassa"
                className="md:w-4 mr-2"
                checked={
                  filters.location.length &&
                  filters.location.includes("Hawassa")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Hawassa
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="adama" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Adama"
                id="adama"
                className=" md:w-4 mr-2"
                checked={
                  filters.location.length && filters.location.includes("Adama")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Adama
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="dire dawa" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Dire Dawa"
                id="dire dawa"
                className="md:w-4 mr-2"
                checked={
                  filters.location.length &&
                  filters.location.includes("Dire Dawa")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Dire Dawa
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="bahir dar" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Bahir Dar"
                id="bahir dar"
                className="md:w-4 mr-2"
                checked={
                  filters.location.length &&
                  filters.location.includes("Bahir Dar")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Bahir Dar
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="mekele" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Mekele"
                id="mekele"
                className="md:w-4 mr-2"
                checked={
                  filters.location.length && filters.location.includes("Mekele")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Mekele
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="jimma" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Jimma"
                id="jimma"
                className=" md:w-4 mr-2"
                checked={
                  filters.location.length && filters.location.includes("Jimma")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Jimma
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="gondar" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Gondar"
                id="gondar"
                className="md:w-4 mr-2"
                checked={
                  filters.location.length && filters.location.includes("Gondar")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Gondar
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="harar" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Harar"
                id="harar"
                className="md:w-4 mr-2"
                checked={
                  filters.location.length && filters.location.includes("Harar")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Harar
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="jijiga" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Jijiga"
                id="jijiga"
                className=" md:w-4 mr-2"
                checked={
                  filters.location.length && filters.location.includes("Jijiga")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Jijiga
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="dessie" className="font-medium">
              <input
                type="checkbox"
                name="location"
                value="Dessie"
                id="dessie"
                className=" md:w-4 mr-2"
                checked={
                  filters.location.length && filters.location.includes("Dessie")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Dessie
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="debre birhan" className=" font-medium">
              <input
                type="checkbox"
                name="location"
                value="Debre Birhan"
                id="debre birhan"
                className=" md:w-4 mr-2"
                checked={
                  filters.location.length &&
                  filters.location.includes("Debre Birhan")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Debre Birhan
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="aksum" className="font-medium">
              <input
                type="checkbox"
                name="location"
                value="Aksum"
                id="aksum"
                className="md:w-4 mr-2"
                checked={
                  filters.location.length && filters.location.includes("Aksum")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Aksum
            </label>
          </li>
        </div>
      </ul>
      <ul className="flex flex-col gap-2 md:gap-3 lg:gap-3 items-start w-full border-b-2 md:pb-5 lg:pb-2">
        <div
          className="font-medium text-xl lg:text-xl flex items-center justify-between w-full"
          onClick={departmentAccordionToggleExpanded}
        >
          <h1 className="font-medium md:text-lg text-base">Department</h1>
          {departmentExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path
                d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                fill=""
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
            </svg>
          )}
        </div>
        <div
          className={`overflow-hidden transition-[max-height] text-left text-thm_secondary_color dark:text-thm_dark_secondary_color duration-500 ease-in flex flex-col gap-2 md:gap-5 ${
            departmentExpanded ? "max-h-full" : "max-h-0 "
          }`}
        >
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="bankingandinsurance" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Banking and Insurance"
                id="bankingandinsurance"
                className="md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Banking and Insurance")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Banking & Insurance
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="salesandmarketing" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Sales and Markating"
                id="salesandmarketing"
                className="md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Sales and Markating")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Sales & Marketing
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="management" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Management"
                id="management"
                className=" md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Management")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Management
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="softwareEng" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Software Engineering"
                id="softwareEng"
                className="md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Software Engineering")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Software Engineering
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="financeandaccounting" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Finance and Accounting"
                id="financeandaccounting"
                className="md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Finance and Accounting")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Finance & Accounting
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="engineering" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Engineering"
                id="engineering"
                className="md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Engineering")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Engineering
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="human resource" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Human Resource"
                id="human resource"
                className=" md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Human Resource")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Human Resource
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="it" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="IT"
                id="it"
                className=" md:w-4 mr-2"
                checked={
                  filters.department.length && filters.department.includes("IT")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              IT
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="health" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Health"
                id="health"
                className="md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Health")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Health
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="legal" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Legal"
                id="legal"
                className="md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Legal")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Legal
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="analytics" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Analytics"
                id="analytics"
                className=" md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Analytics")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Analytics
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="teaching" className=" font-medium">
              <input
                type="checkbox"
                name="department"
                value="Teaching"
                id="teaching"
                className=" md:w-4 mr-2"
                checked={
                  filters.department.length &&
                  filters.department.includes("Teaching")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Teaching
            </label>
          </li>
        </div>
      </ul>
      <ul className="flex flex-col gap-2 md:gap-3 lg:gap-3 items-start w-full border-b-2 md:pb-5 lg:pb-2">
        <div
          className="font-medium text-xl lg:text-xl flex items-center justify-between w-full"
          onClick={companyAccordionToggleExpanded}
        >
          <h1 className="font-medium md:text-lg text-base">Company Type</h1>
          {companyExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path
                d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                fill=""
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600"
            >
              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
            </svg>
          )}
        </div>
        <div
          className={`overflow-hidden transition-[max-height] text-thm_secondary_color dark:text-thm_dark_secondary_color duration-500 ease-in flex flex-col gap-2 md:gap-5 ${
            companyExpanded ? "max-h-full" : "max-h-0 "
          }`}
        >
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="private" className=" font-medium">
              <input
                type="checkbox"
                name="companyType"
                value="Private"
                id="private"
                className="md:w-4 mr-2 "
                checked={
                  filters.companyType.length &&
                  filters.companyType.includes("Private")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Private
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs text-left  flex lg:gap-1">
            <label htmlFor="governmental" className=" font-medium">
              <input
                type="checkbox"
                name="companyType"
                value="Governmental"
                id="governmental"
                className="md:w-4 mr-2"
                checked={
                  filters.companyType.length &&
                  filters.companyType.includes("Governmental")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Governmental
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="corporate" className=" font-medium">
              <input
                type="checkbox"
                name="companyType"
                value="Corporate"
                id="corporate"
                className=" md:w-4 mr-2"
                checked={
                  filters.companyType.length &&
                  filters.companyType.includes("Corporate")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Corporate
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs text-left  flex lg:gap-1">
            <label htmlFor="ngo" className="font-medium ">
              <input
                type="checkbox"
                name="companyType"
                value="NGO"
                id="ngo"
                className="md:w-4 mr-2 "
                checked={
                  filters.companyType.length &&
                  filters.companyType.includes("NGO")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              NGO
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs text-left  flex lg:gap-1">
            <label htmlFor="startup" className=" font-medium">
              <input
                type="checkbox"
                name="companyType"
                value="Startup"
                id="startup"
                className="md:w-4 mr-2 "
                checked={
                  filters.companyType.length &&
                  filters.companyType.includes("Startup")
                }
                onChange={(e) =>
                  handleFilterChange(e.target.name, e.target.value)
                }
              />
              Startup
            </label>
          </li>
        </div>
      </ul>
    </div>
  );
};
