import React from "react";
import { useParams } from "react-router-dom";
import { CompaniesData } from "../../../data/companies";
import { useGetCompaniesQuery } from "../../app/CompaniesApi";
import { NoResultFound } from "../../components/NoResultFound";

export const AboutCompany = () => {
  const { id } = useParams();
  let companyDetails;
  const {
    data: companies = [],
    isLoading,
    isError,
    error,
  } = useGetCompaniesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (!isLoading) {
    companyDetails = companies.data.filter((company) => company._id == id)[0];
  }
  // console.log("company detail", companyDetails);

  return (
    <div className="flex gap-10 text-xs tracking-wide leading-5 text-thm_secondary_color md:text-base md:py-10  py-5  md:px-5 lg:px-10 xl:px-20 px-5">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5"> */}
      {isLoading ? (
        <div className="h-full bg-slate-500">About Company Loading ...</div>
      ) : isError && error.status == 500 ? (
        <NoResultFound title="Error" message={error} />
      ) : (
        <p>{companyDetails.about}</p>
      )}
    </div>
  );
};
