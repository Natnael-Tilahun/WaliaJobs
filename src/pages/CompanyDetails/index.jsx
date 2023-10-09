import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { CompaniesData } from "../../../data/companies";
import { useGetCompaniesQuery } from "../../app/CompaniesApi";
import { NoResultFound } from "../../components/NoResultFound";
import Loader from "../../components/Loader";

export const CompanyDetails = () => {
  const { id } = useParams();
  console.log("searchParams", id);
  // const companyDetail = CompaniesData.filter((company) => company.id == id);
  let companyDetails;
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

  if (!isLoading) {
    companyDetails = companies.data?.filter((company) => company._id == id)[0];
    if (!companyDetails) {
      return (
        <div className="col-span-full h-screen items-center flex ">
          <NoResultFound
            title="No company details found"
            message="No company details found. You'll got as soon as they’re posted"
            className=" w-full"
          />
        </div>
      );
    }
  }

  return (
    <div className="w-full h-full  bg-thm_secondary_background  flex-col  my-0 flex md:my-0  gap-2 lg:gap-10">
      <div className="flex relative bg-thm_background  py-3 flex-col  md:px-5 lg:px-20   border-b-2 gap-3 md:gap-2 px-5   w-full">
        <div className="bg-thm_root1_color w-[90%] md:w-[93%] lg:w-[85%] xl:w-[90%] rounded-lg h-12 md:h-20 opacity-30 absolute top-0"></div>
        <div className="z-30 px-5 lg:px-10 flex flex-col gap-2">
          <img
            src={companyDetails?.companyLogo}
            className="w-16 md:w-24 md:h-24 bg-contain rounded-md h-16 border-2 shadow-md"
            alt=""
          />
          <div className="flex gap-5  justify-between">
            <h1 className=" md:text-xl font-semibold">
              {companyDetails?.name}
            </h1>
            <NavLink
              to="/write-review"
              className="bg-thm_root1_color text-xxs whitespace-nowrap md:text-base text-white h-fit p-2  md:px-4 rounded-lg md:rounded-2xl font-medium tracking-wide"
            >
              Write a Review
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 text-sm md:text-lg text-white w-fit py-0 px-3 flex rounded-md items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 md:w-5"
              >
                <path
                  className="fill-white"
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"
                ></path>
              </svg>{" "}
              <p>{companyDetails?.rating}</p>
            </div>
            <p className="text-thm_secondary_color text-xs md:text-sm">
              Based on {companyDetails?.reviews} Reviews
            </p>
          </div>

          <p className="text-xs md:text-sm text-thm_secondary_color ">
            {companyDetails?.headOffice} | {companyDetails?.mainService} |{" "}
            {companyDetails?.employeeNumber} employees
          </p>
        </div>
        <ul className=" flex text-sm pt-3 md:pt-6 md:text-base gap-10 font-medium">
          <li>
            <NavLink
              to={`/company-details/${id}`}
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="companyJobs"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="benefits"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              Benefits
            </NavLink>
          </li>
        </ul>
      </div>
      {isLoading ? (
        <div className="flex  h-[600px] w-full items-center justify-center relative ">
          {/* <div class="animate-ping rounded-full bg-indigo-500 w-20 h-20 absolute left-[25%] top-[25%]"></div>
          <div class="rounded-full bg-indigo-500 w-20 h-20 absolute left-[25%] top-[25%]"></div>{" "} */}
          <Loader />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
// };
