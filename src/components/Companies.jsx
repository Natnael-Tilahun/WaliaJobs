import React from "react";
import { CompanyCard } from "./CompanyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Companies = () => {
  var settings = {
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
    <div className="w-full text-center md:py-20 py-5 px-5 md:px-10 lg:px-20">
      <h1 className="font-bold text-3xl">Featured companies actively hiring</h1>
      <Slider {...settings} className="py-10 w-full">
        {/* <div className=""> */}
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        {/* </div> */}
      </Slider>

      <button className="text-[#2F6EFC] font-bold mt-10 hover:bg-[#5dbeff] bg-[#97d1f8] px-5 py-1 rounded-lg">
        View all companies
      </button>
    </div>
  );
};
