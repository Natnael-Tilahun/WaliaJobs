import * as Yup from 'yup';
export const contactFormValidationSchema = Yup.object().shape({
  message: Yup.string()
    .min(8, 'Too Short!')
    .max(600, 'Too Long!')
    .required('Message Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Name is Required!'),
  email: Yup.string().email('Invalid Email').required('Email is Required'),
});
