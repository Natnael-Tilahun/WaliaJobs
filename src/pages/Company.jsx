import React, { useState, useEffect, useMemo } from "react";
import { CompanyCard } from "../components/CompanyCard";
import { CompaniesData } from "../../data/companies";
import { useSearchParams } from "react-router-dom";
import { NoResultFound } from "../components/NoResultFound";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_COMPANY_FILTERS,
  SET_JOB_FILTERS_BY_COMPANYTYPE,
} from "../features/jobs/jobFilterSlice";
import { useGetCompaniesQuery } from "../app/CompaniesApi";
import SkeletonLoader from "../components/SkeletonLoader";
import { CompanySkeleton } from "../components/CompanySkeleton";

export const Company = () => {
  const [companyExpanded, setCompanyExpanded] = useState(true);
  const companyAccordionToggleExpanded = () =>
    setCompanyExpanded((current) => !current);
  const dispatch = useDispatch();
  const companyFilters = useSelector((state) => state.jobFilter);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilterChange(value) {
    dispatch(SET_JOB_FILTERS_BY_COMPANYTYPE(value));

    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams.toString());
      return params.toString();
    });
  }

  function removeFilterHandler() {
    dispatch(CLEAR_COMPANY_FILTERS());
    setSearchParams("");
  }

  const {
    data: companies = [],
    isLoading,
    isError,
    error,
    isFetching,
    isSuccess,
  } = useGetCompaniesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const displayedCompanies = () => {
    // Assuming the job data is available in an array called 'jobs'
    //   // 1. Initialize an empty array to store the filtered jobs
    let filteredCompanies = [];
    if (companies.data != undefined && !companyFilters.companyType.length) {
      filteredCompanies = companies.data;
    } else {
      filteredCompanies =
        companies.data &&
        companies.data.filter((company) =>
          companyFilters.companyType.includes(company.companyType)
        );
    }
    return filteredCompanies;
  };

  console.log("displayedCompanies", displayedCompanies());

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
                  onChange={(e) => handleFilterChange(e.target.value)}
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
                  onChange={(e) => handleFilterChange(e.target.value)}
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
                  onChange={(e) => handleFilterChange(e.target.value)}
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
                  onChange={(e) => handleFilterChange(e.target.value)}
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
                  onChange={(e) => handleFilterChange(e.target.value)}
                />
                NGO
              </label>
            </li>
          </div>
        </ul>
      </div>
      <div className="h-full py-5 md:py-0 basis-full grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5  lg:basis-3/4 flex-wrap  rounded-xl w-full md:px-2 lg:px-10 gap-5 md:gap-1 lg:gap-8">
        {isLoading ? (
          <SkeletonLoader className=" w-full h-fit grid col-span-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden gap-8 md:gap-0 ">
            {Array.from({ length: 4 }).map((_, i) => (
              <CompanySkeleton
                className={`hidden ${
                  i == 0
                    ? "flex"
                    : i == 1
                    ? "md:flex"
                    : i == 2
                    ? "lg:flex"
                    : i == 3
                    ? "xl:flex"
                    : "hidden"
                }`}
              />
            ))}
          </SkeletonLoader>
        ) : displayedCompanies &&
          !isError &&
          displayedCompanies().length > 0 ? (
          displayedCompanies().map(
            ({ _id, name, companyLogo, rating, reviews }) => (
              <CompanyCard
                key={_id}
                id={_id}
                img={companyLogo}
                name={name}
                rate={rating}
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
