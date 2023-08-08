import * as Yup from 'yup';

export const interestsValidationSchema = Yup.object().shape({
  interestsDetails: Yup.string()
    .required('Interest details are Requred!')
    .min(15, 'Must be at least 20 characters!')
    .max(600, 'Too long!'),
});
