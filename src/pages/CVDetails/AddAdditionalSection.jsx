import React, { useState, useRef, useCallback } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { SET_COMPLETED } from '../../redux/cvCompletionInfoSlice';
import { FormSections } from '../../utils/FormSections';
import { useDispatch } from 'react-redux';

export const AddAdditionalSection = () => {
  const { id: CV_id } = useParams();
  // alert(CV_id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [jobTitle, setJobTitle] = useState('Developer');
  const [employer, setEmployer] = useState("Dagi's Spa");
  const [city, setCity] = useState('Addis Abeba');
  const [country, setCountry] = useState('Ethiopia');
  const [startDate, setStartDate] = useState('01/02/2021');
  const [endDate, setEndDate] = useState('10/07/2023');
  const [isCurrentlyWorkingThere, setIsCurrentlyWorkingThere] = useState(false);

  const jobTitleRef = useRef();
  const employerRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const isCurrentlyWorkingThereRef = useRef();
  const [editorValue, setEditorValue] = useState('');

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleSubmit = () => {
    dispatch(SET_COMPLETED(FormSections.ADDADDITIONALSECTION));
    navigate(`/Review-cv/${CV_id}`);
  };

  return (
    <form
      action=""
      className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-3 md:px-5 lg:p-5"
    >
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Need to add any more sections?
        </h1>
      </div>
      <div className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full lg:p-5">
        <div className=" w-full h-auto flex flex-col gap-3 md:gap-5 lg:py-5">
          {/* <div className="flex flex-col gap-4 justify-center p-5"> */}
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="certifications"
              className="w-4"
              name="certifications"
            />
            <label htmlFor="certifications">Certifications (Recommended)</label>
          </div>
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="language"
              className="w-4"
              name="language"
            />
            <label htmlFor="language">Languages (Recommended)</label>
          </div>
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="references"
              className="w-4"
              name="references"
            />
            <label htmlFor="language">References (Recommended)</label>
          </div>
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="accomplishments"
              className="w-4"
              name="accomplishments"
            />
            <label htmlFor="accomplishments">Accomplishments</label>
          </div>
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="personalProjects"
              className="w-4"
              name="personalProjects"
            />
            <label htmlFor="personalProjects">Personal Projects</label>
          </div>
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="interesetAndHobbies"
              className="w-4"
              name="interesetAndHobbies"
            />
            <label htmlFor="interesetAndHobbies">Interest and hobbies</label>
          </div>
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="additionalInformation"
              className="w-4"
              name="additionalInformation"
            />
            <label htmlFor="additionalInformation">
              Additional Information
            </label>
          </div>
          {/* </div> */}
        </div>
        <NavLink
          to={-1}
          className=" text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-5  rounded-md basis-[40%] md:basis-[100%] lg:basis-[40%] xl:basis-[25%]"
        >
          Back
        </NavLink>
        <button
          type="button"
          onClick={handleSubmit}
          className="border-2 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[40%] xl:basis-[25%]"
        >
          Continue
        </button>
        {/* <div
          className="w-full prose"
          dangerouslySetInnerHTML={{ __html: editorValue }}
        /> */}
        {/* <FormattedTextDisplay value={quillValue} /> */}
      </div>
    </form>
  );
};
