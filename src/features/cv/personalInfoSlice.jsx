import { createSlice } from '@reduxjs/toolkit';
const SET_PERSONAL_INFO = 'personalInfo/SET_PERSONAL_INFO';
const SET_CONTACT_INFO = 'contactInfo/SET_CONTACT_INFO';
const SET_EDUCATION_INFO = 'educationInfo/SET_EDUCATION_INFO';
const SET_EXPERIENCE_INFO = 'experienceInfo/SET_EXPERIENCE_INFO';
const SET_SKILLS_INFO = 'skillsInfo/SET_SKILLS_INFO';
const SET_SUMMARY_INFO = 'summaryInfo/SET_SUMMARY_INFO';

const initialState = {
  firstName: '',
  lastName: '',
  position: '',
  profilePic: '',
};
// const initialState = {
//   data: {
//     personalInformation: {
//       firstname: 'Natnael',
//       lastname: 'Tilahun',
//       position: 'Software Engineer',
//     },
//     contactInformation: {
//       city: 'Addis Abeba',
//       country: 'Ethiopia',
//       postcode: '0000',
//       phone: '0933654654',
//       email: 'natnaeltilahun97@gmail.com',
//     },
//     education: {
//       degree: 'Bachelor of Science in Computer Science',
//       university: 'University of ABC',
//       location: 'City, Country',
//       graduationYear: '2016',
//     },
//     skills: ['html', 'css', 'javascript'],
//     awards: ['Best Employee of the Year', 'Outstanding Achievement Award'],
//     workExperience: [
//       {
//         company: 'ABC Company',
//         jobTitle: 'Software Engineer',
//         location: 'City, Country',
//         startDate: '2018',
//         endDate: 'Present',
//         responsibilities: [
//           'Developed and maintained web applications using React and Node.js.',
//           'Collaborated with cross-functional teams to deliver high-quality software solutions.',
//           'Implemented efficient algorithms to optimize application performance.',
//         ],
//       },
//       {
//         company: 'XYZ Corporation',
//         jobTitle: 'Frontend Developer',
//         location: 'City, Country',
//         startDate: '2016',
//         endDate: '2018',
//         responsibilities: [
//           'Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.',
//           'Worked closely with UI/UX designers to create visually appealing and user-friendly web applications.',
//           'Performed code reviews and provided technical guidance to junior developers.',
//         ],
//       },
//     ],
//     personalProjects: [
//       'Personal Blog - Built a blog website using React and Express.',
//       'Portfolio Website - Developed a portfolio website to showcase my projects.',
//     ],
//     languages: ['English', 'Spanish'],
//     interests: ['Reading', 'Traveling', 'Playing guitar'],
//     references: ['Available upon request'],
//     profileSummary:
//       'Experienced software engineer with a focus on web development and a passion for creating scalable and efficient applications.',
//   }, // TODO define type of CV object here or use interface?
// };
const actionTypes = (() => {
  const SET_FIRST_NAME = 'SET_FIRST_NAME';
  const SET_LAST_NAME = 'SET_LAST_NAME';
  const SET_POSITION = 'SET_POSITION';
  const SET_PROFILE_PIC = 'SET_PROFILE_PIC';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';

  return {
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_POSITION,
    SET_PROFILE_PIC,
    CLEAR_CV_DATA,
  };
})();
const personalInfoSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    [actionTypes.SET_FIRST_NAME](state, action) {
      // alert('Set personal Info');
      state.firstName = action.payload;
    },
    [actionTypes.SET_PROFILE_PIC](state, action) {
      state.profilePic = action.payload;
    },
    [actionTypes.SET_LAST_NAME](state, action) {
      state.lastName = action.payload;
    },
    [actionTypes.SET_POSITION](state, action) {
      state.position = action.payload;
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const { SET_FIRST_NAME, SET_LAST_NAME, SET_POSITION,  SET_PROFILE_PIC, CLEAR_CV_DATA } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
