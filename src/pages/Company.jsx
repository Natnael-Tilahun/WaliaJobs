import React, { useState, useEffect, useMemo } from "react";
import { CompanyCard } from "../components/CompanyCard";
import { CompaniesData } from "../../data/companies";
import { useSearchParams } from "react-router-dom";
import { NoResultFound } from "../components/NoResultFound";

import {
  getFilterStateFromStorage,
  saveFilterStateToStorage,
  clearFilterFromStorage,
  isEmpty,
} from "../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_COMPANY_FILTERS,
  SET_JOB_FILTERS_BY_COMPANYTYPE,
} from "../redux/jobFilterSlice";

export const Company = () => {
  const [companyExpanded, setCompanyExpanded] = useState(true);
  const companyAccordionToggleExpanded = () =>
    setCompanyExpanded((current) => !current);
  const dispatch = useDispatch();
  const companyFilters = useSelector((state) => state.jobFilter);

  const [selectedFilters, setSelectedFilters] = useState({
    companyType: [],
  });

  const [searchParams, setSearchParams] = useSearchParams();
  let filterByCompanyCheckboxState = getFilterStateFromStorage(
    "filterByCompanyCheckboxState"
  );
  let companyTypeCheckboxState = isEmpty(filterByCompanyCheckboxState)
    ? []
    : JSON.parse(filterByCompanyCheckboxState).companyType;

  useEffect(() => {
    if (companyTypeCheckboxState.length) {
      setSelectedFilters((prevState) => ({
        ...prevState,
        companyType: companyTypeCheckboxState,
      }));

      const params = new URLSearchParams(); // Create a new URLSearchParams object
      companyTypeCheckboxState.forEach((val) => {
        params.append("companyType", val); // Append each value to the 'workMode' parameter
      });

      const searchString = params.toString(); // Get the search string from the URLSearchParams object
      const newUrl = window.location.pathname + "?" + searchString;

      window.history.replaceState(null, null, newUrl);
    } else {
      console.log("No data in the local storage");
    }
  }, []);

  function handleFilterChange(key, value, checked) {
    dispatch(SET_JOB_FILTERS_BY_COMPANYTYPE(value));
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams.toString());

      const handleFilter = (
        filterType,
        filterStateKey,
        checkboxState,
        filters
      ) => {
        const values = params.getAll(key);
        const index = filters.indexOf(value);

        if (index === -1) {
          filters.push(value);
        } else {
          filters.splice(index, 1);
        }

        setSelectedFilters((prevState) => ({
          ...prevState,
          [filterStateKey]: filters,
        }));

        setSearchParams(filterType, filters);

        if (values.length) {
          !values.includes(value) && params.append(key, value);
        } else if (checkboxState.length) {
          !checkboxState.includes(value) && checkboxState.push(value);
          checkboxState.forEach((val) => {
            params.append(key, val);
          });
        } else {
          params.append(key, value);
        }

        const filterState = { ...selectedFilters };
        filterState[filterStateKey] = filters;
        saveFilterStateToStorage(
          "filterByCompanyCheckboxState",
          JSON.stringify(filterState)
        );
      };

      const handleFilterRemoval = (
        filterType,
        filterStateKey,
        checkboxState,
        filters,
        value
      ) => {
        const updatedValues = filters.filter((val) => val !== value);
        params.delete(key);
        updatedValues.forEach((val) => params.append(key, val));
        setSelectedFilters((prevState) => ({
          ...prevState,
          [filterStateKey]: updatedValues,
        }));
        const filterState = { ...selectedFilters };
        filterState[filterStateKey] = updatedValues;
        saveFilterStateToStorage(
          "filterByCompanyCheckboxState",
          JSON.stringify(filterState)
        );
      };

      switch (checked) {
        case "CT_ON":
          handleFilter(
            "companyType",
            "companyType",
            companyTypeCheckboxState,
            selectedFilters.companyType
          );
          break;
        case "CT_OFF":
          handleFilterRemoval(
            "companyType",
            "companyType",
            companyTypeCheckboxState,
            selectedFilters.companyType,
            value
          );
          break;
      }

      return params.toString();
    });
  }

  function removeFilterHandler() {
    dispatch(CLEAR_COMPANY_FILTERS());
    setSearchParams("");
    clearFilterFromStorage();
    setSelectedFilters({
      companyType: [],
    });
  }

  const displayedCompanies = useMemo(() => {
    // Assuming the job data is available in an array called 'jobs'
    //   // 1. Initialize an empty array to store the filtered jobs
    let filteredCompanies = [];
    if (CompaniesData != undefined && !companyFilters.companyType.length) {
      // No filters selected, return all jobs
      filteredCompanies = CompaniesData;
    } else {
      filteredCompanies =
        CompaniesData &&
        CompaniesData.filter((company) =>
          companyFilters.companyType.includes(company.companyType)
        );
    }
    return filteredCompanies;
  }, [CompaniesData, companyFilters.companyType]);

  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-20 gap-2 lg:gap-10">
      <div className="flex basis-full md:basis-[40%] xl:basis-1/5 bg-thm_card items-start rounded-xl h-full flex-wrap md:flex-col border-2 text-thm_primary_color shadow-lg gap-2 lg:gap-6 p-2 md:p-5 lg:p-10 ">
        {/* <h1 className="border-b-2 font-medium md:text-xl lg:text-xl pb-2 md:pb-4 lg:pb-7 w-full text-left">
          All Filters
        </h1> */}
        <div className="flex justify-between w-full items-center">
          <h1 className="border-b-2 text-base font-medium md:text-xl lg:text-xl pb-2 md:pb-4 lg:pb-7 w-full text-left">
            All Filters
          </h1>
          <h1
            className="border-b-2 cursor-pointer hover:text-blue-400 text-sm text-right font-medium  lg:text-base text-thm_root1_color pb-2 md:pb-4 lg:pb-7 w-full"
            onClick={() => {
              removeFilterHandler();
            }}
          >
            Clear Filters
          </h1>
        </div>
        <ul className="flex flex-col gap-2 md:gap-3 lg:gap-6 items-start w-full border-b-2 md:pb-5 lg:pb-2">
          <div
            className="font-medium text-base lg:text-xl flex items-center justify-between w-full"
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
            className={`overflow-hidden transition-[max-height] text-thm_secondary_color duration-500 ease-in flex flex-col gap-2 md:gap-5 ${
              companyExpanded ? "max-h-full" : "max-h-0 "
            }`}
          >
            <li className="lg:text-base md:text-sm text-xs flex lg:gap-1">
              <label htmlFor="private" className="font-medium">
                <input
                  type="checkbox"
                  name="companyType"
                  value="Private"
                  id="private"
                  className="md:w-4 mr-2"
                  checked={
                    companyFilters.companyType.length &&
                    companyFilters.companyType.includes("Private")
                  }
                  onChange={(e) =>
                    handleFilterChange(
                      e.target.name,
                      e.target.value,
                      e.target.checked ? "CT_ON" : "CT_OFF"
                    )
                  }
                />
                Private
              </label>
            </li>
            <li className="lg:text-base md:text-sm text-xs flex lg:gap-1">
              <label htmlFor="governmental" className="font-medium">
                <input
                  type="checkbox"
                  name="companyType"
                  value="Governmental"
                  id="governmental"
                  className="md:w-4 mr-2"
                  checked={
                    companyFilters.companyType.length &&
                    companyFilters.companyType.includes("Governmental")
                  }
                  onChange={(e) =>
                    handleFilterChange(
                      e.target.name,
                      e.target.value,
                      e.target.checked ? "CT_ON" : "CT_OFF"
                    )
                  }
                />
                Governmental
              </label>
            </li>
            <li className="lg:text-base md:text-sm text-xs flex lg:gap-1">
              <label htmlFor="corporate" className="font-medium">
                <input
                  type="checkbox"
                  name="companyType"
                  value="Corporate"
                  id="corporate"
                  className=" md:w-4 mr-2"
                  checked={
                    companyFilters.companyType.length &&
                    companyFilters.companyType.includes("Corporate")
                  }
                  onChange={(e) =>
                    handleFilterChange(
                      e.target.name,
                      e.target.value,
                      e.target.checked ? "CT_ON" : "CT_OFF"
                    )
                  }
                />
                Corporate
              </label>
            </li>
            <li className="lg:text-base md:text-sm text-xs flex lg:gap-1">
              <label htmlFor="startup" className="font-medium">
                <input
                  type="checkbox"
                  name="companyType"
                  value="Startup"
                  id="startup"
                  className="md:w-4 mr-2"
                  checked={
                    companyFilters.companyType.length &&
                    companyFilters.companyType.includes("Startup")
                  }
                  onChange={(e) =>
                    handleFilterChange(
                      e.target.name,
                      e.target.value,
                      e.target.checked ? "CT_ON" : "CT_OFF"
                    )
                  }
                />
                Startup
              </label>
            </li>
            <li className="lg:text-base md:text-sm text-xs flex lg:gap-1">
              <label htmlFor="ngo" className="font-medium">
                <input
                  type="checkbox"
                  name="ngo"
                  value="NGO"
                  id="ngo"
                  className="md:w-4 mr-2"
                  checked={
                    companyFilters.companyType.length &&
                    companyFilters.companyType.includes("NGO")
                  }
                  onChange={(e) =>
                    handleFilterChange(
                      e.target.name,
                      e.target.value,
                      e.target.checked ? "CT_ON" : "CT_OFF"
                    )
                  }
                />
                NGO
              </label>
            </li>
          </div>
        </ul>
      </div>
      <div className="h-full py-5 md:py-0 basis-full grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  lg:basis-3/4 flex-wrap  rounded-xl w-full md:px-2 lg:px-10 gap-5 lg:gap-8">
        {displayedCompanies && displayedCompanies.length > 0 ? (
          displayedCompanies.map(
            ({ id, img, name, rate, reviews, className }) => (
              <CompanyCard
                key={id}
                id={id}
                img={img}
                name={name}
                rate={rate}
                reviews={reviews}
                className="lg:w-full w-2/3 mx-auto bg-thm_card transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
              />
            )
          )
        ) : (
          <div className="col-span-full">
            <NoResultFound />
          </div>
        )}
      </div>
    </div>
  );
};
