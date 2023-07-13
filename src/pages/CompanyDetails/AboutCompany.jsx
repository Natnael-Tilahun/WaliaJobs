import React from "react";
import { useParams } from "react-router-dom";
import { CompaniesData } from "../../../data/companies";

export const AboutCompany = () => {
  const { id } = useParams();
  console.log("searchParams", id);
  const companyDetail = CompaniesData.filter((company) => company.id == id);

  return (
    <div className="flex gap-10 md:py-10  py-5  md:px-5 lg:px-10 xl:px-20 px-5">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5"> */}
      <p>{companyDetail[0].about}</p>
      {/* </div> */}
    </div>
  );
};
