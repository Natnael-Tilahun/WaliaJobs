import React, { useState, useRef, useCallback } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_COMPLETED } from "../../features/cv/cvCompletionInfoSlice";
import { FormSections } from "../../utils/FormSections";
import { DELETE_CERTIFICATE } from "../../features/cv/certificationInfoSlice";
import CvBuildRouterHandler from "../../utils/helperFunctions/CvBuildRouterHandler";

export const CertificationsReviewSection = () => {
  const certifications = useSelector((state) => state.certificationInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: CVId } = useParams();
  const cvCompletionInfo = useSelector((state) => state.cvCompletionInfo);

  const handleDeleteCertificate = (id) => {
    dispatch(DELETE_CERTIFICATE(id));
  };

  const handleUpdateCertificate = (id) => {
    navigate(`/CV-Details/1/Certification-Section/${id}`);
  };

  const handleContinue = () => {
    dispatch(SET_COMPLETED(FormSections.CERTIFICATIONS));
    navigate(
      CvBuildRouterHandler(FormSections.CERTIFICATIONS, cvCompletionInfo, CVId)
    );
  };

  return (
    <form
      action=""
      className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-3 md:px-5 lg:p-5"
    >
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Review your certifications
        </h1>
      </div>
      <div className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
        <div className=" w-full h-auto flex flex-col gap-2 lg:gap-5">
          {certifications &&
            certifications.map(
              (
                {
                  certificationName,
                  certificateIssuedBy,
                  certificateIssuedDate,
                  id,
                },
                index
              ) => (
                <div
                  className="flex justify-between border-2 rounded-md  lg:py-5 p-3 lg:px-7 items-center"
                  key={id}
                >
                  <div className="flex gap-3 lg:gap-10 ">
                    <p className="font-medium md:text-xl">{index + 1}</p>
                    <div className="flex flex-col gap-1">
                      <h1 className=" font-semibold">{certificationName}</h1>
                      <p className="lg:text-lg">
                        {certificateIssuedBy}, {certificateIssuedDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:w-8 w-6 fill-orange-400"
                      viewBox="0 0 24 24"
                      onClick={() => handleUpdateCertificate(id)}
                    >
                      <path d="M12.8995 6.85431L17.1421 11.0969L7.24264 20.9964H3V16.7538L12.8995 6.85431ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:w-7 w-6 fill-red-600"
                      viewBox="0 0 24 24"
                      onClick={() => handleDeleteCertificate(id)}
                    >
                      <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path>
                    </svg>
                  </div>
                </div>
              )
            )}

          <NavLink
            to="/CV-Details/1/Certification-Section/0"
            className="flex gap-2 justify-end items-center px-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-8 w-6 fill-thm_root1_color"
              viewBox="0 0 24 24"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
            </svg>
            <p className="font-semibold text-sm md:text-base text-thm_root1_color uppercase">
              Add More Certifications
            </p>
          </NavLink>
        </div>
        <NavLink
          to={-1}
          className="z-50 text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-5  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
        >
          Back
        </NavLink>
        <button
          onClick={handleContinue}
          className="border-2 z-50 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
        >
          Continue
        </button>
      </div>
    </form>
  );
};
