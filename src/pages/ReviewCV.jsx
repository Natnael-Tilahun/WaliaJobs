import React, { useRef } from 'react';
import { CVTemplate } from './CVDetails/CVTemplate';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { FormSections } from '../utils/FormSections';
import { useDispatch } from 'react-redux';
import { SET_COMPLETED } from '../redux/cvCompletionInfoSlice';
import ReactToPrint, { useReactToPrint } from 'react-to-print';

export const ReviewCV = () => {
  const navigate = useNavigate();
  const { id: CV_ID } = useParams();
  const dispatch = useDispatch();
  const componentRef = useRef();

  const handleSubmit = () => {
    dispatch(SET_COMPLETED(FormSections.FINALIZE));
    navigate(`/CV-Details/${CV_ID}`);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className=" h-[1450px] py-4  lg:p-[40px] w-full  flex flex-col lg:flex-row lg:justify-evenly gap-0 lg:gap-10 px-3 md:px-5 ">
      <CVTemplate
        reff={componentRef}
        id="cv-template"
        className="order-2 md:order-1 lg:w-[900px] h-[1164px]"
      />

      <div className=" lg:order-2 py-5  self-center lg:self-start md:px-10  lg:px-5 md:text-xl font-bold flex flex-col gap-2 md:gap-3 ">
        <button className="flex gap-3 md:gap-5 hover:text-thm_root1_color cursor-pointer">
          <span>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z"></path>
            </svg>
          </span>
          Download
        </button>
        <button
          onClick={handlePrint}
          className="flex gap-3 md:gap-5 hover:text-thm_root1_color cursor-pointer"
        >
          <span>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 17H17V22H7V17ZM19 20V15H5V20H3C2.44772 20 2 19.5523 2 19V9C2 8.44772 2.44772 8 3 8H21C21.5523 8 22 8.44772 22 9V19C22 19.5523 21.5523 20 21 20H19ZM5 10V12H8V10H5ZM7 2H17C17.5523 2 18 2.44772 18 3V6H6V3C6 2.44772 6.44772 2 7 2Z"></path>
            </svg>
          </span>
          Print
        </button>
        <button className="flex gap-3 md:gap-5 hover:text-thm_root1_color cursor-pointer">
          <span>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
            </svg>
          </span>
          Email
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="flex gap-3 md:gap-5 hover:text-thm_root1_color"
        >
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21 6.75736L19 8.75736V4H10V9H5V20H19V17.2426L21 15.2426V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V6.75736ZM21.7782 8.80761L23.1924 10.2218L15.4142 18L13.9979 17.9979L14 16.5858L21.7782 8.80761Z"></path>
          </svg>
          Edit Again
        </button>
      </div>
    </div>
  );
};
