import React, { useState, useRef } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Formik, Form, ErrorMessage } from 'formik';
import { experienceDetailValidationSchema } from '../../validations/experienceDetailSchema';
import { ErrorMessageComponent } from '../../components/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { SET_EXPERIENCE_DETAILS } from '../../redux/experienceInfoSlice';
import DOMPurify from 'dompurify';

export const ExperienceDetailSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quillRef = useRef(null);
  const { id: experienceId } = useParams();
  let filterdExperience;

  console.log('params', experienceId);
  let initialValues = {
    experienceDetails: '',
  };

  const experiences = useSelector((state) => state.experienceInfo);
  console.log('experiences', experiences);

  if (experienceId) {
    filterdExperience = experiences.filter((exp) => exp.id == experienceId)[0];
    filterdExperience && (initialValues = filterdExperience);
    console.log('experiences', filterdExperience, initialValues);
  }

  // const handleHtml = (html) => dispatch(SET_EXPERIENCE_DETAILS(html))

  const handleQuillBlur = (formik) => {
    // Trigger blur manually
    formik.setFieldTouched('experienceDetails');
  };

  const handleSubmit = (values) => {
    alert('experience detail submitted');
    console.log(
      'DETAILS HTML',
      DOMPurify.sanitize(values.experienceDetails, {
        ALLOWED_TAGS: ['ol', 'ul', 'li', 'strong'],
        ADD_TAGS: ['ol', 'ul'],
        ADD_ATTR: ['ol', 'class', 'list-decimal'],
        ADD_ATTR: ['ul', 'class', 'list-disc'],
      })
    );
    // Handle form submission and access form values
    // const delta = quillRef.current.getContents();
    // const delta = quillRef.current.unprivilegedEditor.getContents()
    // const html = quillRef.current.editor.clipboard.convert(delta);

    // console.log('responisiblity', delta);

    // if (experienceId > 0) {
    //   alert('no exp');
    //   console.log('updated values', values);
    //   dispatch(UPDATE_EXPERIENCE({ values: values, id: experienceId }));
    //   navigate(`/CV-Details/1/Experience-Detail/${experienceId}`);
    // } else {
    dispatch(
      SET_EXPERIENCE_DETAILS({
        values: values.experienceDetails,
        id: experienceId,
      })
    );
    // }
    navigate('/CV-Details/1/Experience-Review');
  };

  const handleBack = () => navigate(-1);

  return (
    <div className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-3 md:px-5 lg:p-5">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Tell us what you did as a Full-Stack Developer
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          Use the recommended phrases below or write your own.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={experienceDetailValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className=" w-full  h-40 mb-3">
              <ReactQuill
                ref={quillRef}
                value={formik.values.experienceDetails}
                onChange={
                  (value) => formik.setFieldValue('experienceDetails', value)
                  // handleHtml(value)
                }
                onBlur={(event) => {
                  handleQuillBlur(formik);
                }}
                className="lg:h-full h-1/2 focus:border-thm_root1_color focus:outline-none"
              />
            </div>
            <ErrorMessage
              render={(msg) => <ErrorMessageComponent msg={msg} />}
              name="experienceDetails"
            />
            <button
              onClick={handleBack}
              className=" text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-1  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Back
            </button>
            <button
              type="submit"
              className="border-2 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Continue
            </button>
            {/* <div
          className="w-full prose"
          dangerouslySetInnerHTML={{ __html: editorValue }}
        /> */}
            {/* <FormattedTextDisplay value={quillValue} /> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
