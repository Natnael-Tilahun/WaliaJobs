import * as Yup from 'yup';

export const signupFormValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters'),

  email: Yup.string().email('Invalid email').required('Email is required'),

  phone: Yup.string()
    // .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .min(10, 'Phone number must be 10 digits')
    .required('Phone number is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});
