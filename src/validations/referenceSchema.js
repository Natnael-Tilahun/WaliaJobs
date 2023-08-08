import * as Yup from 'yup';
import { isPast } from 'date-fns';

export const referenceValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Reference full name is Requred!'),
  jobTitle: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Job title is Requred!'),
  companyName: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Company name is Requred!'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Email address is Requred!'),
  phone: Yup.string()
    .min(9, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Phone number is Requred!'),
});
