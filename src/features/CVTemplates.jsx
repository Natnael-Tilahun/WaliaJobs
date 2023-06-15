import React from "react";
import { CvTemplate } from "../components/CvTemplate";

export const CVTemplates = () => {
  return (
    <div>
      <div className=" gap-10 grid grid-cols-2 px-5 md:grid-cols-3 md:flex-row py-5 flex-wrap">
        <CvTemplate
          img="/cvTemplate1.png"
          className="rounded-md basis-1/3   shadow-md"
        />
        <CvTemplate
          img="/cvTemplate2.png"
          className="rounded-md basis-1/3 shadow-md"
        />
        <CvTemplate
          img="/cvTemplate3.png"
          className="rounded-md basis-1/3  shadow-md"
        />
        <CvTemplate
          img="/cvTemplate4.png"
          className="rounded-md basis-1/3   shadow-md"
        />
        <CvTemplate
          img="/cvTemplate5.png"
          className="rounded-md basis-1/3 shadow-md"
        />
        <CvTemplate
          img="/cvTemplate2.png"
          className="rounded-md basis-1/3  shadow-md"
        />
      </div>
    </div>
  );
};
