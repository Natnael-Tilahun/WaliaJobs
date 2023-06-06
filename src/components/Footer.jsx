import React from "react";

export const Footer = () => {
  return (
    <div className="w-full text-center md:py-16 py-5 my-0 md:my-0 flex bg-thm_background shadow shadow-thm_secondary_color  flex-col px-5 md:px-10 lg:px-20">
      <ul className="flex flex-col gap-2 text-center items-center md:flex-row font-medium text-sm  md:justify-between border-b-[1px] border-gray-500 pb-2">
        <li>Jobs</li>
        <li>Build CV</li>
        <li>Company</li>
        <li className="font-black text-[#f8451d] text-xl md:text-3xl -order-1 md:-order-none">
          Walia Jobs
        </li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
      <ul className="flex justify-center gap-5 p-5">
        <li>
          <img
            src="src/assets/images/telegramlogo.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/tiktoklogo.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/youtubelogo.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/gmaillogo2.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/facebooklogo2.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/linkedinlogo2.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
      </ul>
      <p className="text-gray-500 tracking-wide text-sm">
        @WaliaJobs, Inc 2023. We love our users!
      </p>
    </div>
  );
};
