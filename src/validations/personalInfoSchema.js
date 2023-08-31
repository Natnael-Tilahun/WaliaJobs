import * as Yup from 'yup';
export const personalInfoValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('FirstName Required'),
  lastName: Yup.string().required('LastName Required'),
  position: Yup.string().required('Position Required'),
  city: Yup.string().required('City Required'),
  country: Yup.string().required('Country Required'),
  profilePic: Yup.mixed()
  .test("is-file-too-big", "File exceeds 1MB", () => {
    let valid = true;
    const files = fileRef?.current?.files;
    if (files) {
      const fileArr = Array.from(files);
      fileArr.forEach((file) => {
        const size = file.size / 1024 / 1024;
        if (size > 10) {
          valid = false;
        }
      });
    }
    return valid;
  })
  .test(
    "is-file-of-correct-type",
    "File is not of supported type",
    () => {
      let valid = true;
      const files = fileRef?.current?.files;
      if (files) {
        const fileArr = Array.from(files);
        fileArr.forEach((file) => {
          const type = file.type.split("/")[1];
          alert(type)
          const validTypes = [
            "zip",
            "rtf",
            "jpeg",
            "png",
            "jpg",
            "html",
            "gif",
          ];
          if (!validTypes.includes(type)) {
            valid = false;
          }
        });
      }
      return valid;
    }
  ).required(),
  profilePic: Yup.string().required('Profile Pic Required!'),
  phone: Yup.string()
    .min(9, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Phone Number Required!'),
  email: Yup.string().email('Invalid Email').required('Required'),
});
