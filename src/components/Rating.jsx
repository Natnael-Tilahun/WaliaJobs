import React, { useState } from "react";

export const Rating = ({ keys }) => {
  //   const [rateValue, setRateValue] = useState();
  const [rateValue, setRateValue] = useState({
    ["Overall Rating"]: -1,
    ["Work-Life balance"]: -1,
    ["Salary & Benefits"]: -1,
    ["Promotions / Appraisal"]: -1,
    ["Job Security"]: -1,
    ["Skill Development / Learning"]: -1,
    ["Work Satisfaction"]: -1,
    ["Company Culture"]: -1,
  });
  const handleRating = (index) => {
    // alert(key);
    alert(keys);
    setRateValue((prevState) => ({ ...prevState, keys: index }));
  };

  return (
    <div className="rating flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="thm_secondary_color"
          onClick={() => handleRating(index)}
          className={`mr-1 h-8 w-8 text-thm_secondary_color stroke-thm_secondary_color hover:${() =>
            handleRating(index)}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className={
              index <= rateValue[keys] ? "fill-[#fabc2e] stroke-[#fabc2e]" : ""
            }
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
};
