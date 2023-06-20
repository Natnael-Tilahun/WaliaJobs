import React from "react";
import { NavLink } from "react-router-dom";
import { CvTemplate } from "../../components/CvTemplate";

export const CVTemplates = () => {
  return (
    <div>
      <div className=" gap-x-10 gap-y-10 md:gap-y-20 grid grid-cols-2 px-5 md:grid-cols-3 md:flex-row py-5 flex-wrap md:py-10  md:px-3 lg:px-20">
        <NavLink to="/Contact-Section/1" className="lg:w-1/2">
          <CvTemplate
            img="/cvTemplate1.png"
            className="rounded-md basis-1/2 w-full   shadow-md"
          />
        </NavLink>
        <NavLink to="/Contact-Section/2" className="lg:w-1/2">
          <CvTemplate
            img="/cvTemplate2.png"
            className="rounded-md basis-1/3 w-full shadow-md"
          />
        </NavLink>
        <NavLink to="/Contact-Section/3" className="lg:w-1/2">
          <CvTemplate
            img="/cvTemplate3.png"
            className="rounded-md basis-1/3 w-full  shadow-md"
          />
        </NavLink>
        <NavLink to="/Contact-Section/4" className="lg:w-1/2">
          <CvTemplate
            img="/cvTemplate4.png"
            className="rounded-md basis-1/3 w-full  shadow-md"
          />
        </NavLink>
        <NavLink to="/Contact-Section/5" className="lg:w-1/2">
          <CvTemplate
            img="/cvTemplate5.png"
            className="rounded-md basis-1/3 w-full shadow-md"
          />
        </NavLink>
        <NavLink to="/Contact-Section/6" className="lg:w-1/2">
          <CvTemplate
            img="/cvTemplate2.png"
            className="rounded-md basis-1/3 w-full shadow-md"
          />
        </NavLink>
      </div>
    </div>
  );
};
