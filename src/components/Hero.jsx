import React from "react";

function Hero() {
  return (
    <div className="w-full h-[350px] bg-[#FAFAFA] rounded-b-[200px] flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-extrabold py-5 tracking-wider">
        We hunt jobs like the wild Walia
      </h1>
      <div className="border-l-2 border-t-2 border-b-2 w-1/2 rounded-l-3xl pl-5  flex items-center justify-between">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Skills"
          className="bg-transparent w-1/2"
        />
        <div className="h-full bg-gray-400 w-[0.5px]"></div>
        <input
          type="text"
          name=""
          id=""
          className=""
          placeholder="Select Experience"
        />
        <button className="bg-blue-800  text-white py-2 px-10 rounded-3xl">
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero;
