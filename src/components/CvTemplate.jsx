import React from "react";

export const CvTemplate = ({ img, className }) => {
  return (
    <>
      <img
        src={img}
        alt="Cv Template image"
        className={`mx-auto ${className}`}
      />
    </>
  );
};
