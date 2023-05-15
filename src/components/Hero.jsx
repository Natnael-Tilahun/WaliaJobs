import React from "react";

function Hero() {
  return (
    <div className="w-full h-[350px] bg-[#FAFAFA] rounded-b-[200px] flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-extrabold py-8 tracking-wider">
        We hunt jobs like the wild Walia
      </h1>
      <div className="border-l-2  h-10 gap-0 w-2/3 rounded-l-3xl pl-0  flex items-center justify-between">
        <div 
          className="bg-transparent flex items-center gap-2 w-1/3 border-2 h-full pl-5 rounded-l-full"
          >
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 fill-slate-400"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path></svg>
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Skills"
          className=" focus:border-none focus:outline-none"
        />
        </div>
        {/* <div className="h-full bg-gray-700 w-[1px]"></div> */}
        <input
          type="text"
          name=""
          id=""
          className="h-full border-l-2 w-1/3 border-t-2 border-b-2 pl-3 focus:outline-none"
          placeholder="Select Location"
        />
        <select name="" id="" placeholder="Select Experience" className=" h-full w-1/3 border-l-2 border-t-2 border-b-2 pl-3 mr-3 focus:outline-none bg-transparent ">
          <option className="text-slate-300" value="" selected disabled>Select Experience </option>
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
