import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  SET_JOB_FILTERS_BY_DEPARTMENT,
  SET_JOB_FILTERS_BY_EXPERIENCE,
  SET_JOB_FILTERS_BY_LOCATION,
} from "../redux/jobFilterSlice";

function Hero() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filters = useSelector(state => state.jobFilter)
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  function setDepartmentFilter(value) {
    setSelectedDepartment(value);
    dispatch(SET_JOB_FILTERS_BY_DEPARTMENT(value));
  }
  function setLocationFilter(value) {
    setSelectedLocation(value);
    dispatch(SET_JOB_FILTERS_BY_LOCATION(value));
  }
  function setExperienceFilter(value) {
    setSelectedExperience(value);
    dispatch(SET_JOB_FILTERS_BY_EXPERIENCE(value));
  }
  console.log(
    "selectedSkills",
    selectedDepartment,
    "experence",
    selectedExperience,
    "selectedLocation",
    selectedLocation
  );

  const goToPosts = () => {
    // console.log(departmentFilter);
    const encodedDepartmentFilter = selectedDepartment
      ? encodeURIComponent(selectedDepartment)
      : "";
    const encodedLocationFilter = selectedLocation
      ? encodeURIComponent(selectedLocation)
      : "";
    const encodedExperienceFilter = selectedExperience
      ? encodeURIComponent(selectedExperience)
      : "";

      if(filters.department.length || filters.location.length || filters.experience){
        navigate({
          pathname: "/jobs",
          search: `?department=${encodedDepartmentFilter}&experience=${encodedExperienceFilter}&location=${encodedLocationFilter}`,
        });
      }

  
  };
  return (
    <div className="w-full h-[calc(100vh-66px)] md:h-[350px] bg-gradient-to-r from-blue-100 to-orange-100  lg:rounded-b-[200px] rounded-b-[50px] flex flex-col md:justify-center py-10 gap-10 md:gap-2 items-center px-5 lg:px-10 xl:px-20 ">
      <div className="py-8 flex flex-col gap-3 items-center">
        <h1 className="text-center text-2xl md:text-4xl font-extrabold uppercase md:font-extrabold   tracking-widest">
          Find your dream
          <span className=" text-[#1e40af] "> job</span>
        </h1>
        <p className="text-lg tracking-wider text-thm_secondary_color">
          Connect with top companies and discover exciting career opportunities.{" "}
        </p>
      </div>

      <form className="border-l-2 border-2 text-base pb-3 bg-white p-6 md:p-0 md:h-12 md:gap-0 gap-8 w-full flex-col md:flex-row md:w-[90%] lg:w-3/4 rounded-3xl   flex items-center justify-between drop-shadow-xl">
        <div className=" flex items-center pl-2 border-2 md:border-none gap-2 w-full md:w-[45%] h-full lg:pl-5 rounded-l-full bg-white">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 fill-slate-400"
            >
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
            </svg>
          </span>

          <select
            name=""
            id=""
            value={selectedDepartment}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            placeholder="Select Experience"
            className="border-r-4 border-l-0  h-full w-full bg-white md:rounded-none rounded-l-full py-2  border-0 md:border-t-0 md:border-r-0 md:border-b-0  pl-3 md:mr-2 lg:mr-7 focus:outline-none text-gray-600 "
          >
            <option
              className="text-slate-300"
              value=""
              defaultValue="select department"
              disabled
            >
              Select Department{" "}
            </option>
            <option value="Banking and Insurance">Banking and Insurance</option>
            <option value="Sales and Markating">Sales and Markating</option>
            <option value="Management">Management</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Finance and Accounting">
              Finance and Accounting
            </option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resource">Human Resource</option>
            <option value="IT">IT</option>
            <option value="Health">Health</option>
            <option value="Legal">Legal</option>
            <option value="Analytics">Analytics</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
        <select
          name=""
          id=""
          value={selectedLocation}
          onChange={(e) => setLocationFilter(e.target.value)}
          placeholder="Select Experience"
          className=" h-full w-full md:w-1/3 bg-white md:rounded-none rounded-l-full p-2  border-2 md:border-t-0 md:border-r-0 md:border-b-0  pl-3 md:mr-5 lg:mr-7 focus:outline-none text-gray-600 "
        >
          <option
            className="text-slate-300"
            value=""
            defaultValue="select location"
            disabled
          >
            Select Location{" "}
          </option>
          <option value="Addis Abeba">Addis Abeba</option>
          <option value="Hawassa">Hawassa</option>
          <option value="Adama">Adama</option>
          <option value="Dire Dawa">Dire Dawa</option>
          <option value="Jijiga">Jijiga</option>
          <option value="Harar">Harar</option>
          <option value="Bahir Dar">Bahir Dar</option>
          <option value="Mekelle">Mekelle</option>
          <option value="Jimma">Jimma</option>
          <option value="Gondar">Gondar</option>
          <option value="Dessie">Dessie</option>
          <option value="Debre Birhan">Debre Birhan</option>
          <option value="Aksum">Aksum</option>
          <option value="Dessie">Dessie</option>

        </select>
        <select
          name=""
          id=""
          required
          placeholder="Select Experience"
          value={selectedExperience}
          onChange={(e) => setExperienceFilter(e.target.value)}
          className=" h-full bg-white w-full md:w-1/3 border-l-2 md:rounded-none rounded-l-full p-2 border-2 md:border-t-0 md:border-b-0 md:border-r-0  pl-3 md:mr-5 lg:mr-7 focus:outline-none text-gray-600 "
        >
          <option
            className="text-slate-300"
            value=""
            defaultValue="select experience"
            disabled
          >
            Select Experience{" "}
          </option>
          <option value="0">Fresher (Less than a year)</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
          <option value="5">5 Years</option>
          <option value="6">6 Years</option>
          <option value="7">7 Years</option>
        </select>
        <button
          onClick={goToPosts}
          className="bg-thm_root1_color text-white py-2 px-10 rounded-3xl"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Hero;
