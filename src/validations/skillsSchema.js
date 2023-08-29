import * as Yup from 'yup';

export const skillsValidationSchema = Yup.object().shape({
  skillDetails: Yup.string()
    .required('Skill details are Requred!')
    .min(20, 'Must be at least 20 characters!')
    .max(1000, 'Too long!'),
});
