import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CvTemplate } from "./CvTemplate";

export const BuildCvSection = () => {
  const settings = {
    speed: 4000,
    swipeToSlide: true,
    // centerPadding: "100px",
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <div className="w-full bg-thm_background text-center md:py-10 py-5 my-5 md:my-0 px-5 md:px-10 lg:px-20">
      <h1 className="font-bold text-3xl">Build your cv</h1>
      {/* <div className="flex gap-10 flex-wrap py-16 justify-center lg:justify-between"> */}
      <Slider {...settings} className="py-16 w-full">
        <CvTemplate img="/cvTemplate1.png" className="xl:px-20 px-5" />
        <CvTemplate img="/cvTemplate2.png" className="xl:px-20 px-5" />
        <CvTemplate img="/cvTemplate3.png" className="xl:px-20 px-5" />
        <CvTemplate img="/cvTemplate4.png" className="xl:px-20 px-5" />
        <CvTemplate img="/cvTemplate5.png" className="xl:px-20 px-5" />
        <CvTemplate img="/cvTemplate1.png" className="xl:px-20 px-5" />
        <CvTemplate img="/cvTemplate2.png" className="xl:px-20 px-5" />
        <CvTemplate img="/cvTemplate3.png" className="xl:px-20 px-5" />
        <CvTemplate img="/cvTemplate4.png" className="xl:px-20 px-5" />
        <CvTemplate img="/cvTemplate5.png" className="xl:px-20 px-5" />
      </Slider>
      {/* </div> */}
    </div>
  );
};
