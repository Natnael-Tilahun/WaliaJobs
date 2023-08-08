import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { languageValidationSchema } from '../../validations/languageSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LANGUAGE, UPDATE_LANGUAGE } from '../../redux/languageInfoSlice';
import { ErrorMessageComponent } from '../../components/ErrorMessage';

export const LanguageSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = () => navigate(-1);
  const { id: languageId } = useParams();
  const languages = useSelector((state) => state.languageInfo);
  let filteredLanguage;

  let initialValues = {
    languageName: '',
    proficiencyLevel: '',
  };

  if (languageId) {
    filteredLanguage = languages.filter((lang) => lang.id == languageId)[0];
    filteredLanguage && (initialValues = filteredLanguage);
    console.log('languages', filteredLanguage, initialValues);
  }

  const handleSubmit = (values, { resetForm }) => {
    if (languageId > 0) {
      alert('no lang');
      console.log('updated values', values);
      dispatch(UPDATE_LANGUAGE({ values: values, id: languageId }));
      navigate(`/CV-Details/1/Languages-Review`);
    } else {
      const languageId = languages.length + 1;
      values.id = languageId;
      console.log('languages values', values);
      dispatch(SET_LANGUAGE(values));
      navigate('/CV-Details/1/Languages-Review');
    }
  };
  return (
    <div className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-5 lg:p-5">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Add your languages
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          List all languages that you can communicate with
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validateOn
        validationSchema={languageValidationSchema}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className="flex flex-col gap-1 md:gap-2 basis-[100%] lg:basis-[45%]">
              <label htmlFor="languageName">Language Name</label>
              <Field
                type="text"
                name="languageName"
                id="languageName"
                placeholder="English"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="languageName"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="proficiencyLevel">Proficiency Level</label>
              <Field
                as="select"
                name="proficiencyLevel"
                id="proficiencyLevel"
                placeholder="Advanced"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              >
                <option value="" disabled>
                  Select Proficiency Level
                </option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Advanced">Advanced</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Low">Low</option>
              </Field>
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="proficiencyLevel"
              />
            </div>

            <button
              onClick={handleBack}
              className=" text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-2  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Back
            </button>
            <button
              type="submit"
              className="border-2 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
