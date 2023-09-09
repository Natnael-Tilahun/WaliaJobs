import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { SET_JOB_FILTERS_BY_DEPARTMENT } from '../features/jobs/jobFilterSlice';

export const JobCatagories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToPosts = (e) => {
    const departmentFilter = e.currentTarget.querySelector('h1').textContent;
    dispatch(SET_JOB_FILTERS_BY_DEPARTMENT(departmentFilter));
    console.log(departmentFilter);
    const encodedDepartmentFilter = encodeURIComponent(departmentFilter);
    navigate({
      pathname: '/jobs',
      search: `?department=${encodedDepartmentFilter}`,
    });
  };
  return (
    <div className="w-full grid bg-thm_background  auto-cols-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-10 md:gap-y-16 md:gap-10 justify-evenly py-20 px-5 md:px-10 lg:px-20">
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col hover:shadow-xl border-2 justify-center shadow-md items-center px-5 text-xs md:text-sm py-3 border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM4 8.23607V9H20V8.23607L12 4.23607L4 8.23607ZM12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Banking and Insurance</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Sales and Markating</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Management</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Software Engineering</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M22.0049 7H23.0049V17H22.0049V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V7ZM20.0049 17H14.0049C11.2435 17 9.00488 14.7614 9.00488 12C9.00488 9.23858 11.2435 7 14.0049 7H20.0049V5H4.00488V19H20.0049V17ZM21.0049 15V9H14.0049C12.348 9 11.0049 10.3431 11.0049 12C11.0049 13.6569 12.348 15 14.0049 15H21.0049ZM14.0049 11H17.0049V13H14.0049V11Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">
            Finance and Accounting
          </h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M3 19.0002V5.70058C3 5.28007 3.26307 4.90449 3.65826 4.76079L13.3291 1.24411C13.5886 1.14974 13.8755 1.28361 13.9699 1.54313C13.9898 1.5979 14 1.65573 14 1.714V6.66682L20.3162 8.77223C20.7246 8.90834 21 9.29048 21 9.72091V19.0002H23V21.0002H1V19.0002H3ZM5 19.0002H12V3.85555L5 6.40101V19.0002ZM19 19.0002V10.4417L14 8.77501V19.0002H19Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Engineering</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl shadow-md items-center px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Human Resource</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl shadow-md items-center px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M8 20V14H16V20H19V4H5V20H8ZM10 20H14V16H10V20ZM21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM11 8V6H13V8H15V10H13V12H11V10H9V8H11Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Health</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl shadow-md items-center px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M12.998 2V3H19.998V5H12.998V19H16.998V21H6.99805V19H10.998V5H3.99805V3H10.998V2H12.998ZM4.99805 6.34315L7.82647 9.17157C8.55033 9.89543 8.99805 10.8954 8.99805 12C8.99805 14.2091 7.20719 16 4.99805 16C2.78891 16 0.998047 14.2091 0.998047 12C0.998047 10.8954 1.44576 9.89543 2.16962 9.17157L4.99805 6.34315ZM18.998 6.34315L21.8265 9.17157C22.5503 9.89543 22.998 10.8954 22.998 12C22.998 14.2091 21.2072 16 18.998 16C16.7889 16 14.998 14.2091 14.998 12C14.998 10.8954 15.4458 9.89543 16.1696 9.17157L18.998 6.34315ZM4.99805 9.17157L3.58383 10.5858C3.20988 10.9597 2.99805 11.4606 2.99805 12C2.99805 13.1046 3.89348 14 4.99805 14C6.10262 14 6.99805 13.1046 6.99805 12C6.99805 11.4606 6.78621 10.9597 6.41226 10.5858L4.99805 9.17157ZM18.998 9.17157L17.5838 10.5858C17.2099 10.9597 16.998 11.4606 16.998 12C16.998 13.1046 17.8935 14 18.998 14C20.1026 14 20.998 13.1046 20.998 12C20.998 11.4606 20.7862 10.9597 20.4123 10.5858L18.998 9.17157Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Legal</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl items-center shadow-md px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M3.00098 5.47902L10.3778 4.4625V11.5902H3.00098V5.47902ZM3.00098 18.521L10.3778 19.5375V12.4982H3.00098V18.521ZM11.1894 19.646L21.001 21V12.4982H11.1894V19.646ZM11.1894 4.35402V11.5902H21.001V3L11.1894 4.35402Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">IT</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl items-center shadow-md px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Teaching</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl items-center shadow-md px-5 py-3 text-xs md:text-sm border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-thm_secondary_color"
            viewBox="0 0 24 24"
          >
            <path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path>
          </svg>
          <h1 className="font-bold whitespace-nowrap">Analytics</h1>
        </div>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
    </div>
  );
};
