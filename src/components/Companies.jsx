import React from "react";
import { CompanyCard } from "./CompanyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export const Companies = () => {
  const settings = {
    speed: 4000,
    swipeToSlide: true,
    // centerPadding: "100px",
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full text-center md:py-0 py-5 px-5 md:px-10 lg:px-20">
      <h1 className="font-bold text-3xl">Featured companies actively hiring</h1>
      <Slider {...settings} className="py-10 mb-10 w-full ">
        {/* <div className=""> */}
        <CompanyCard
          img="src/assets/images/cbelogo.jpg"
          name="Commercial Bank of Ethiopia"
          rate="7"
          reviews="50+"
        />
        <CompanyCard
          img="src/assets/images/boalogo.jpg"
          name="Bank of Abyssinia"
          rate="10"
          reviews="90+"
        />
        <CompanyCard
          img="src/assets/images/awashlogo.png"
          name="Awash Bank"
          rate="7"
          reviews="40+"
        />
        <CompanyCard
          img="src/assets/images/safaricomlogo.jpg"
          name="Safaricom"
          rate="10"
          reviews="40+"
        />
        <CompanyCard
          img="src/assets/images/airlineslogo.png"
          name="Ethiopian Airlines"
          rate="9"
          reviews="70+"
        />
        <CompanyCard
          img="src/assets/images/ethiotelecomlogo.jpg"
          name="Ethio Telecom"
          rate="7"
          reviews="30+"
        />
        <CompanyCard
          img="src/assets/images/totalethiopialogo.png"
          name="Total Ethiopia"
          rate="10"
          reviews="10+"
        />
        <CompanyCard
          img="src/assets/images/heinekenlogo.png"
          name="Heineken"
          rate="10"
          reviews="30+"
        />
        <CompanyCard
          img="src/assets/images/cocacolalogo.png"
          name="Coca Cola"
          rate="10"
          reviews="30+"
        />
        <CompanyCard
          img="src/assets/images/nyalamotorslogo.png"
          name="Nyala Motors"
          rate="10"
          reviews="50+"
        />
        <CompanyCard
          img="src/assets/images/gebeyalogo.png"
          name="Gebeya"
          rate="10"
          reviews="50+"
        />
        {/* </div> */}
      </Slider>

      <NavLink
        to="/company"
        className="text-[#2F6EFC] font-bold mt-10 hover:bg-[#5dbeff] bg-[#97d1f8] px-5 py-1 rounded-lg"
      >
        View all companies
      </NavLink>
    </div>
  );
};
