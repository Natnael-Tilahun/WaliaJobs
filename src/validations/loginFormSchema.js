import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});
