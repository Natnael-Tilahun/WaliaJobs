import React from "react";
import { CvTemplate } from "../components/CvTemplate";
import { NavLink } from "react-router-dom";

export const RecommendedCV = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 md:grid-cols-3 flex-col gap-6 md:flex-row py-5">
        <NavLink to="/cv_details/1">
          <CvTemplate
            img="/cvTemplate1.png"
            className="rounded-md basis-1/5   shadow-md"
          />
        </NavLink>
        <NavLink to="/cv_details/2">
          <CvTemplate
            img="/cvTemplate2.png"
            className="rounded-md basis-1/5 shadow-md"
          />
        </NavLink>
        <NavLink to="/cv_details/3">
          <CvTemplate
            img="/cvTemplate3.png"
            className="rounded-md basis-1/5  shadow-md"
          />
        </NavLink>
      </div>
      <NavLink
        to="alltemplates"
        className=" text-[#2F6EFC] font-bold hover:bg-[#5dbeff] bg-[#97d1f8] px-5 py-1 rounded-lg w-auto self-center"
      >
        View all templates
      </NavLink>
    </div>
  );
};
