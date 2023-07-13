import React from "react";
import { CompanyCard } from "../components/CompanyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { CompaniesData } from "../../data/companies";

export const Companies = () => {
  const settings = {
    speed: 5000,
    swipeToSlide: true,
    // centerPadding: "100px",
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full text-center bg-thm_background md:py-0 py-5 px-5 md:px-10 lg:px-20">
      <h1 className="font-bold text-3xl">Featured companies actively hiring</h1>
      <Slider {...settings} className="py-10 mb-10 w-full ">
        {/* <div className=""> */}

        {CompaniesData.map(({ id, img, name, rate, reviews }) => (
          <CompanyCard
            key={id}
            id={id}
            img={img}
            name={name}
            rate={rate}
            reviews={reviews}
            className="xl:w-[65%] lg:w-[80%] self-center w-[75%] shadow-sm hover:scale-105 hover:shadow-lg transition ease-in-out delay-150"
          />
        ))}
        {/* </div> */}
      </Slider>

      <NavLink
        to="/company"
        className="text-[#2F6EFC] font-bold mt-10 hover:bg-[#5dbeff] border-2 border-[#97d1f8] px-5 py-1 rounded-lg"
      >
        View all companies
      </NavLink>
    </div>
  );
};
