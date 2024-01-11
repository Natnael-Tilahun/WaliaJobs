import * as Yup from 'yup';

export const resetPasswordFormSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, 'New password must be at least 8 characters')
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords do not match')
    .required('Confirm password is required'),
});
