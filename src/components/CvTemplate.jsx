import React from "react";

export const CvTemplate = ({ img }) => {
  return (
    <>
      <img
        src={img}
        alt="Cv Template image"
        className="xl:px-20 px-5 mx-auto"
      />
    </>
  );
};
