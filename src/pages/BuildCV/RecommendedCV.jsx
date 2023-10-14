import React from "react";
import { NavLink } from "react-router-dom";
import { CvTemplate } from "../../components/CvTemplate";

export const RecommendedCV = () => {
  return (
    <div className="flex flex-col gap-10   md:py-10  py-5  md:px-3 lg:px-20 px-5">
      <div className="grid grid-cols-2 md:grid-cols-3 flex-col gap-6 md:gap-20 lg:gap-5 md:flex-row py-5">
        <NavLink to="/CV-Details/1" className=" md:w-[100%] lg:w-1/2">
          <CvTemplate
            img="/cvTemplate1.png"
            className="rounded-md  shadow-md w-full"
          />
        </NavLink>
        <NavLink to="/CV-Details/2" className=" lg:w-1/2">
          <CvTemplate
            img="/cvTemplate2.png"
            className="rounded-md  shadow-md w-full"
          />
        </NavLink>
        <NavLink to="/CV-Details/3" className=" lg:w-1/2">
          <CvTemplate
            img="/cvTemplate3.png"
            className="rounded-md   shadow-md w-full"
          />
        </NavLink>
      </div>
      <NavLink
        to="alltemplates"
        className="hover:bg-blue-500 bg-blue-400 rounded-lg w-auto self-center text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300  font-bold  border-none px-5 py-3"
      >
        View all templates
      </NavLink>
    </div>
  );
};
