import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getFilterStateFromStorage,
  saveFilterStateToStorage,
  clearFilterFromStorage,
  isEmpty,
} from "../utils/helperFunctions";

export const Sidebar = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(30);
  const [workModeExpanded, setWorkModeExpanded] = useState(true);
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [departmentExpanded, setDepartmentExpanded] = useState(false);
  const [companyExpanded, setCompanyExpanded] = useState(false);
  const [locationAccordionExpanded, setLocationAccordionExpanded] =
    useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    workMode: [],
    experience: "",
    location: [],
    department: [],
  });
  const [searchParams, setSearchParams] = useSearchParams();

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
  const handleYearsOfExperienceChange = (event) => {
    setYearsOfExperience(event.target.value);
  };

  let filterCheckboxState = getFilterStateFromStorage("filterState");
  let workModeCheckboxState = isEmpty(filterCheckboxState)
    ? []
    : JSON.parse(filterCheckboxState).workMode;

  useEffect(() => {
    if (workModeCheckboxState.length) {
      console.log(
        "local storage value side bar selectd filters",
        workModeCheckboxState
      );
      setSelectedFilters((prevState) => ({
        ...prevState,
        workMode: workModeCheckboxState,
      }));

      const params = new URLSearchParams(); // Create a new URLSearchParams object
      workModeCheckboxState.forEach((val) => {
        params.append("workMode", val); // Append each value to the 'workMode' parameter
      });

      const searchString = params.toString(); // Get the search string from the URLSearchParams object
      const newUrl = window.location.pathname + "?" + searchString;
      window.history.replaceState(null, null, newUrl);
    } else {
      console.log("No data in the local storage");
    }
  }, []);

  function handleFilterChange(key, value, checked) {
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams.toString());
      if (!checked) {
        const values = [...selectedFilters.workMode];
        const updatedValues = values.filter((val) => val !== value);
        params.delete(key);
        updatedValues.forEach((val) => params.append(key, val));
        setSelectedFilters((prevState) => ({
          ...prevState,
          workMode: updatedValues,
        }));
        const filterState = {
          workMode: updatedValues,
          location: [], // Add your location filter state here
          department: [], // Add your department filter state here
        };
        saveFilterStateToStorage("filterState", JSON.stringify(filterState));
      } else {
        // Add the filter to the URL query parameters
        const values = params.getAll(key);
        const filters = [...selectedFilters.workMode];
        const index = filters.indexOf(value);
        if (index === -1) {
          filters.push(value);
        } else {
          filters.splice(index, 1);
        }

        setSelectedFilters((prevState) => ({
          ...prevState,
          workMode: filters,
        }));
        setSearchParams("workMode", filters);
        if (values.length) {
          !values.includes(value) && params.append(key, value);
        } else if (workModeCheckboxState.length) {
          !workModeCheckboxState.includes(value) &&
            workModeCheckboxState.push(value);
          workModeCheckboxState.forEach((val) => {
            params.append(key, val); // Append each value to the 'workMode' parameter
          });
        } else {
          params.append(key, value);
        }
        // saveworkModeCheckboxStateToStorage("workModeCheckboxState", filters);
        const filterState = {
          workMode: filters,
          location: [], // Add your location filter state here
          department: [], // Add your department filter state here
        };
        saveFilterStateToStorage("filterState", JSON.stringify(filterState));
      }

      return params.toString();
    });
  }

  function removeFilterHandler() {
    setSearchParams("");
    clearFilterFromStorage();
    setSelectedFilters({
      workMode: [],
      experience: "",
      location: [],
      department: [],
    });
  }
  return (
    <div className="flex basis-full md:basis-[35%] dark:text-thm_dark_primary_color  dark:bg-thm_dark_background dark:border-gray-700 lg:basis-[25%] xl:basis-[25%] bg-thm_background items-start rounded-xl h-full flex-wrap md:flex-col border-2 text-thm_primary_color shadow-lg gap-2 lg:gap-6 p-2 md:p-5 lg:p-8 ">
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
      <div className="flex flex-col mx-auto border-b-2 pb-2 md:pb-5 lg:pb-5 w-full">
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
          className={`overflow-hidden transition-[max-height] text-left text-sm text-thm_secondary_color dark:text-thm_dark_secondary_color duration-100 ease-in flex flex-col pt-2 lg:pt-4 gap-2 md:gap-3 lg:gap-5 ${
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
                  workModeCheckboxState.length &&
                  workModeCheckboxState.includes("In Office")
                }
                onChange={(e) =>
                  handleFilterChange(
                    e.target.name,
                    e.target.value,
                    e.target.checked
                  )
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
                  workModeCheckboxState.length &&
                  workModeCheckboxState.includes("Remote")
                }
                onChange={(e) =>
                  handleFilterChange(
                    e.target.name,
                    e.target.value,
                    e.target.checked
                  )
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
                  workModeCheckboxState.length &&
                  workModeCheckboxState.includes("Hybrid")
                }
                onChange={(e) =>
                  handleFilterChange(
                    e.target.name,
                    e.target.value,
                    e.target.checked
                  )
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
                  workModeCheckboxState.length &&
                  workModeCheckboxState.includes("TWFH")
                }
                onChange={(e) =>
                  handleFilterChange(
                    e.target.name,
                    e.target.value,
                    e.target.checked
                  )
                }
              />
              Temp. WFH dut to covid
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:gap-4  border-b-2 md:pb-5 lg:pb-5 pb-3 w-full">
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
            className="range w-full h-2 bg-gray-700 accent-gray-800 rounded-full outline-none"
            min="0"
            max="30"
            value={yearsOfExperience}
            onChange={handleYearsOfExperienceChange}
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:-mb-2 px-1 md:px-2 py-1  md:py-2 bg-gray-800 dark:bg-thm_secondary_color text-white text-xs md:text-sm rounded">
            <span className="font-bold">{yearsOfExperience}</span>
          </div>
          <div className="flex justify-between text-thm_secondary_color dark:text-thm_dark_secondary_color tracking-wide text-sm md:text-base lg:text-base font-medium">
            <p>O Yr</p>
            <p>30 Yrs</p>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-2 md:gap-3 lg:gap-6 items-start w-full border-b-2 md:pb-5 lg:pb-2">
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
            <label htmlFor="addis abeba" className=" font-medium">
              <input
                type="checkbox"
                name="addis abeba"
                value="addis abeba"
                id="addis abeba"
                className="md:w-4 mr-2"
              />
              Addis Abeba
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="hawassa" className=" font-medium">
              <input
                type="checkbox"
                name="hawassa"
                value="hawassa"
                id="hawassa"
                className="md:w-4 mr-2"
              />
              Hawassa
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="adama" className=" font-medium">
              <input
                type="checkbox"
                name="adama"
                value="adama"
                id="adama"
                className=" md:w-4 mr-2"
              />
              Adama
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="dire dawa" className=" font-medium">
              <input
                type="checkbox"
                name="dire dawa"
                value="dire dawa"
                id="dire dawa"
                className="md:w-4 mr-2"
              />
              Dire Dawa
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="bahir dar" className=" font-medium">
              <input
                type="checkbox"
                name="bahir dar"
                value="bahir dar"
                id="bahir dar"
                className="md:w-4 mr-2"
              />
              Bahir Dar
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="mekele" className=" font-medium">
              <input
                type="checkbox"
                name="mekele"
                value="mekele"
                id="mekele"
                className="md:w-4 mr-2"
              />
              Mekele
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="jimma" className=" font-medium">
              <input
                type="checkbox"
                name="jimma"
                value="jimma"
                id="jimma"
                className=" md:w-4 mr-2"
              />
              Jimma
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="gondar" className=" font-medium">
              <input
                type="checkbox"
                name="gondar"
                value="gondar"
                id="gondar"
                className="md:w-4 mr-2"
              />
              Gondar
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="harar" className=" font-medium">
              <input
                type="checkbox"
                name="harar"
                value="harar"
                id="harar"
                className="md:w-4 mr-2"
              />
              Harar
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="jijiga" className=" font-medium">
              <input
                type="checkbox"
                name="jijiga"
                value="jijiga"
                id="jijiga"
                className=" md:w-4 mr-2"
              />
              Jijiga
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="dessie" className="font-medium">
              <input
                type="checkbox"
                name="dessie"
                value="dessie"
                id="dessie"
                className=" md:w-4 mr-2"
              />
              Dessie
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="debre birhan" className=" font-medium">
              <input
                type="checkbox"
                name="debre birhan"
                value="debre birhan"
                id="debre birhan"
                className=" md:w-4 mr-2"
              />
              Debre Birhan
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="aksum" className="font-medium">
              <input
                type="checkbox"
                name="aksum"
                value="aksum"
                id="aksum"
                className="md:w-4 mr-2"
              />
              Aksum
            </label>
          </li>
        </div>
      </ul>
      <ul className="flex flex-col gap-2 md:gap-3 lg:gap-6 items-start w-full border-b-2 md:pb-5 lg:pb-2">
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
                name="bankingandinsurance"
                value="banking and insurance"
                id="bankingandinsurance"
                className="md:w-4 mr-2"
              />
              Banking & Insurance
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="salesandmarketing" className=" font-medium">
              <input
                type="checkbox"
                name="salesandmarketing"
                value="sales and markating"
                id="salesandmarketing"
                className="md:w-4 mr-2"
              />
              Sales & Marketing
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="management" className=" font-medium">
              <input
                type="checkbox"
                name="management"
                value="management"
                id="management"
                className=" md:w-4 mr-2"
              />
              Management
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="softwareEng" className=" font-medium">
              <input
                type="checkbox"
                name="softwareEng"
                value="software engineering"
                id="softwareEng"
                className="md:w-4 mr-2"
              />
              Software Engineering
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="financeandaccounting" className=" font-medium">
              <input
                type="checkbox"
                name="financeandaccounting"
                value="finance and accounting"
                id="financeandaccounting"
                className="md:w-4 mr-2"
              />
              Finance & Accounting
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="engineering" className=" font-medium">
              <input
                type="checkbox"
                name="engineering"
                value="engineering"
                id="engineering"
                className="md:w-4 mr-2"
              />
              Engineering
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="human resource" className=" font-medium">
              <input
                type="checkbox"
                name="human resource"
                value="human resource"
                id="human resource"
                className=" md:w-4 mr-2"
              />
              Human Resource
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="health" className=" font-medium">
              <input
                type="checkbox"
                name="health"
                value="health"
                id="health"
                className="md:w-4 mr-2"
              />
              Health
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="legal" className=" font-medium">
              <input
                type="checkbox"
                name="legal"
                value="legal"
                id="legal"
                className="md:w-4 mr-2"
              />
              Legal
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="ngo" className=" font-medium">
              <input
                type="checkbox"
                name="ngo"
                value="ngo"
                id="ngo"
                className=" md:w-4 mr-2"
              />
              NGO
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="analytics" className=" font-medium">
              <input
                type="checkbox"
                name="analytics"
                value="analytics"
                id="analytics"
                className=" md:w-4 mr-2"
              />
              Analytics
            </label>
          </li>
          {/* <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="remote" className=" font-medium">
              <input
                type="checkbox"
                name="remote"
                value="remote"
                id="remote"
                className=" md:w-4 mr-2"
              />
              Remote
            </label>
          </li> */}
        </div>
      </ul>
      <ul className="flex flex-col gap-2 md:gap-3 lg:gap-6 items-start w-full border-b-2 md:pb-5 lg:pb-2">
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
                name="private"
                value="private"
                id="private"
                className="md:w-4 mr-2"
              />
              Private
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="governmental" className=" font-medium">
              <input
                type="checkbox"
                name="governmental"
                value="governmental"
                id="governmental"
                className="md:w-4 mr-2"
              />
              Governmental
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="corporate" className=" font-medium">
              <input
                type="checkbox"
                name="corporate"
                value="corporate"
                id="corporate"
                className=" md:w-4 mr-2"
              />
              Corporate
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs  flex lg:gap-1">
            <label htmlFor="startup" className=" font-medium">
              <input
                type="checkbox"
                name="startup"
                value="startup"
                id="startup"
                className="md:w-4 mr-2"
              />
              Startup
            </label>
          </li>
        </div>
      </ul>
    </div>
  );
};
