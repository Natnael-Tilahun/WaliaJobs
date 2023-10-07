import React from "react";
import { useParams } from "react-router-dom";
import { CompaniesData } from "../../../data/companies";
import { useGetCompaniesQuery } from "../../app/CompaniesApi";

export const AboutCompany = () => {
  const { id } = useParams();
  console.log("searchParams", id);
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

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  companyDetails = companies.data.filter((company) => company._id == id)[0];
  // console.log("company detail", companyDetails);

  return (
    <div className="flex gap-10 text-xs tracking-wide leading-5 text-thm_secondary_color md:text-base md:py-10  py-5  md:px-5 lg:px-10 xl:px-20 px-5">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5"> */}
      <p>{companyDetails.about}</p>
      {/* </div> */}
    </div>
  );
};
