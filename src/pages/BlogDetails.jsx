import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ShareLinks } from "../components/ShareLinks";

export const BlogDetails = () => {
  return (
    <div className="w-full h-full  bg-thm_secondary_background  flex-col  my-0 flex md:my-0  gap-2 lg:gap-10">
      <div className="flex bg-thm_background py-2 lg:py-5 flex-col  my-0  md:my-0 md:px-7 lg:px-32   border-b-2 gap-3 md:gap-2 px-5  lg:gap-5 w-full">
        <img
          src="https://media.licdn.com/dms/image/C5612AQFzCuX3aPtzCQ/article-cover_image-shrink_720_1280/0/1643204087014?e=2147483647&v=beta&t=xR7m4MgyepAMXJJEiESgtDVtKP_wMDavGMd8_-GEUlM"
          alt="blog caption image"
          className="shadow-md w-[65%] hidden xl:w-[35%] self-center bg-center "
        />
        <h1 className="text-2xl md:text-4xl pt-10 pb-3 text-center uppercase font-bold">
          5 Best carrier tips for young people
        </h1>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 md:gap-0">
          <div>
            <p className="text-xs md:text-sm text-thm_root1_color text-left underline py-1">
              Author: Natnael Tilahun
            </p>
            <p className="text-sm text-thm_secondary_color  text-left">
              published Jul 8, 2023
            </p>
          </div>
          <div className="flex gap-1 md:gap-3 text-xs items-center text-thm_secondary_color">
            <p>share with:</p>
            <ShareLinks />
          </div>
        </div>
        <ul className=" flex justify-start text-left text-sm pt-6  gap-10 font-medium">
          <li>
            <NavLink
              to={-1}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 flex items-center text-thm_root1_color`}
            >
              <span>
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-thm_root1_color"
                    d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
                  ></path>
                </svg>
              </span>
              Back
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row py-10 tracking-wide leading-8 text-thm_secondary_color  md:px-7 lg:px-32 gap-5 md:gap-10 px-5  w-full">
        <img
          src="https://media.licdn.com/dms/image/C5612AQFzCuX3aPtzCQ/article-cover_image-shrink_720_1280/0/1643204087014?e=2147483647&v=beta&t=xR7m4MgyepAMXJJEiESgtDVtKP_wMDavGMd8_-GEUlM"
          alt="blog caption image"
          className="shadow-md w-[100%]  lg:w-[35%] self-center bg-center "
        />
        <div className="flex flex-col gap-2">
          <p className="py-2">
            I made a lot of mistakes at the beginning of my career.
          </p>
          <p>
            I didn’t have a mentor or anyone to show me the ropes, so I was left
            to do what I thought was right. But in many cases, what I thought
            was a great choice ended up not being the best option. Everything
            worked out in the end, but I could have saved myself some headaches
            and stress if I had listened to quality career advice.
          </p>
          <p className="py-2">
            Here are my five best career tips for young people:{" "}
          </p>
          <p className="py-2">
            <strong>1. Taste test.</strong>
            You don’t have to know exactly what you want to do early in your
            career. In fact, it’s common not to have it all figured out. Taste
            test various possibilities and try out different jobs before you
            commit. It’s important to enjoy what you do, so don’t feel like you
            have to stick to your original plan.
          </p>
          <p className="py-2">
            <strong>2. Build your own ladder.</strong>
            It used to be that young professionals started in a low-level
            position and worked their way up the corporate ladder at the same
            company. But those days are gone–you don’t have to follow the
            template everyone tells you to follow. You can build your own career
            and chart your own path.
          </p>
          <p className="py-2">
            <strong>3. Life is too short to be miserable. </strong>
            You spend the majority of your time at work, so make sure it is at
            an organization and in a role you enjoy. Don’t spend your time being
            miserable. If you don’t like your job, do something about it.
          </p>
          <p className="py-2">
            <strong>4. Make your own decisions. </strong>
            Everyone has opinions about what you should do with your life and
            career. You can take their feedback, but it is important to make
            your own decisions. No one is going to look out for you but you, and
            you’re the one who has to live with the consequences of your
            choices.
          </p>
          <p className="py-2">
            <strong>5. Be self-aware. </strong>
            Be honest with yourself and take time to know your strengths and
            weaknesses. Find areas you excel in and areas to grow. The more
            self-aware you become, the more growth and opportunities you’ll see.
          </p>
          Starting your career is an exciting time filled with opportunities.
          This advice will set you on the path to success and help you find the
          right career course for you.
        </div>
      </div>
    </div>
  );
};
