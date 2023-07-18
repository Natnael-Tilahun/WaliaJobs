import React, { useState } from "react";
import PropTypes from "prop-types";

export const Rating = ({
  value,
  keys,
  handleSetState,
  hoverValue,
  setHoverValue,
}) => {
  const handleMouseEnter = (index) => {
    setHoverValue((prevState) => ({ ...prevState, [keys]: index }));
  };

  const handleMouseLeave = () => {
    // alert(hoverValue);
    setHoverValue((prevState) => ({ ...prevState, [keys]: 0 }));
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
          onClick={() => handleSetState(keys, index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          className={`mr-1 w-6 h-6 lg:h-8 lg:w-8 text-thm_secondary_color stroke-thm_secondary_color`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className={
              (hoverValue || value) >= index + 1
                ? "fill-[#fabc2e] stroke-[#fabc2e]"
                : ""
            }
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  keys: PropTypes.string.isRequired,
  handleSetState: PropTypes.func.isRequired,
  //   hoverValue: PropTypes.number.isRequired,
  //   setHoverValue: PropTypes.func.isRequired,
};

Rating.defaultProps = {
  keys: "",
};

export default Rating;
