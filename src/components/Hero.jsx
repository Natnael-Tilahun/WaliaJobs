import React from "react";

function Hero() {
  return (
    <div className="w-full h-[calc(100vh-66px)] md:h-[350px] bg-[#FAFAFA]  lg:rounded-b-[200px] rounded-b-[100px] flex flex-col md:justify-center py-10 gap-10 md:gap-2 items-center px-5 lg:px-10 xl:px-20 ">
      <h1 className="text-center text-2xl md:text-4xl font-extrabold uppercase md:font-extrabold py-8  tracking-wider">
        We hunt{" "}
        <span className=" text-[#f8451d] text-3xl md:text-5xl">jobs</span> like
        the wild Walia
      </h1>
      <div className="border-l-2 border-2 text-lg bg-white p-6 md:p-0 md:h-12 md:gap-0 gap-8 w-full flex-col md:flex-row md:w-[90%] lg:w-3/4 rounded-3xl   flex items-center justify-between drop-shadow-xl">
        <div className=" flex items-center p-2 border-2 md:border-none gap-2 w-full md:w-1/3  h-full lg:pl-5 rounded-l-full bg-white">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 fill-slate-400"
            >
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
            </svg>
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Skills"
            className=" focus:border-none w-full focus:outline-none flex-1 h-full"
          />
        </div>
        <select
          name=""
          id=""
          placeholder="Select Experience"
          className=" h-full w-full md:w-1/3 md:rounded-none rounded-l-full p-2  border-2 md:border-t-0 md:border-r-0 md:border-b-0  pl-3 md:mr-5 lg:mr-7 focus:outline-none text-gray-600 "
        >
          <option className="text-slate-300" value="" selected disabled>
            Select Location{" "}
          </option>
          <option value="addis abeba">Addis Abeba</option>
          <option value="hawassa">Hawassa</option>
          <option value="adama">Adama</option>
          <option value="dire dawa">Dire Dawa</option>
          <option value="jigiga">Jigiga</option>
          <option value="harar">Harar</option>
          <option value="bahirdar">Bahirdar</option>
          <option value="mekelle">Mekelle</option>
        </select>
        <select
          name=""
          id=""
          placeholder="Select Experience"
          className=" h-full w-full md:w-1/3 border-l-2 md:rounded-none rounded-l-full p-2 border-2 md:border-t-0 md:border-b-0 md:border-r-0  pl-3 md:mr-5 lg:mr-7 focus:outline-none text-gray-600 "
        >
          <option className="text-slate-300" value="" selected disabled>
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
        <button className="bg-blue-800  text-white py-2 px-10 rounded-3xl">
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero;
