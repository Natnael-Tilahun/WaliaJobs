import React, { useState } from "react";
import { CompanyCard } from "../components/CompanyCard";
import { CompaniesData } from "../../data/companies";

export const Company = () => {
  const [companyExpanded, setCompanyExpanded] = useState(true);
  const companyAccordionToggleExpanded = () =>
    setCompanyExpanded((current) => !current);

  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-20 gap-2 lg:gap-10">
      <div className="flex basis-full md:basis-[40%] xl:basis-1/5 bg-thm_background items-start rounded-xl h-full flex-wrap md:flex-col border-2 text-thm_primary_color shadow-lg gap-2 lg:gap-6 p-2 md:p-5 lg:p-10 ">
        {/* <h1 className="border-b-2 font-medium md:text-xl lg:text-xl pb-2 md:pb-4 lg:pb-7 w-full text-left">
          All Filters
        </h1> */}
        <div className="flex justify-between w-full items-center">
          <h1 className="border-b-2 text-base font-medium md:text-xl lg:text-xl pb-2 md:pb-4 lg:pb-7 w-full text-left">
            All Filters
          </h1>
          <h1 className="border-b-2 cursor-pointer hover:text-blue-400 text-sm text-right font-medium  lg:text-base text-thm_root1_color pb-2 md:pb-4 lg:pb-7 w-full">
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
                  name="private"
                  value="private"
                  id="private"
                  className="md:w-4 mr-2"
                />
                Private
              </label>
            </li>
            <li className="lg:text-base md:text-sm text-xs flex lg:gap-1">
              <label htmlFor="governmental" className="font-medium">
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
            <li className="lg:text-base md:text-sm text-xs flex lg:gap-1">
              <label htmlFor="corporate" className="font-medium">
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
            <li className="lg:text-base md:text-sm text-xs flex lg:gap-1">
              <label htmlFor="startup" className="font-medium">
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
      <div className="h-full py-5 md:py-0 basis-full grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  lg:basis-3/4 flex-wrap  rounded-xl w-full md:px-2 lg:px-10 gap-5 lg:gap-8">
        {/* <CompanyCard
          img="/cbelogo.jpg"
          name="Commercial Bank of Ethiopia"
          rate="7"
          reviews="50+"
          className="lg:w-full w-2/3 mx-auto bg-thm_background transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
        /> */}
        {CompaniesData.map(({ id, img, name, rate, reviews, className }) => (
          <CompanyCard
            key={id}
            img={img}
            name={name}
            rate={rate}
            reviews={reviews}
            className={className}
          />
        ))}
      </div>
    </div>
  );
};
