import React, { useEffect, useState } from "react";
import { CompanyCard } from "../components/CompanyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { CompaniesData } from "../../data/companies";
import { useGetCompaniesQuery } from "../app/CompaniesApi";
import SkeletonLoader from "../components/SkeletonLoader";
import { CompanySkeleton } from "../components/CompanySkeleton";

export const Companies = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newSlidesToShow = getSlidesToShow(width, companies.data.length);
      setSlidesToShow(newSlidesToShow);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    data: companies = [],
    isLoading,
    isError,
    error,
    isFetching,
    isSuccess,
  } = useGetCompaniesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  let settings;

  function getSlidesToShow(width, length) {
    if (width <= 500) return 1;
    if (width <= 768) return 2;
    if (width <= 1025) return 3;
    if (width > 1025) return 4;
  }

  if (!isLoading) {
    // const slidesToShow = Math.min(CompaniesData?.length, 4);
    // const slidesToShow = getSlidesToShow(window.innerWidth);

    console.log("companies", companies, "duplicates + ", slidesToShow);

    settings = {
      speed: 500,
      swipeToSlide: true,
      // centerPadding: "100px",
      dots: true,
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
  }

  return (
    <div className="w-full text-center bg-thm_background md:py-5 py-10 px-3 md:px-5 lg:px-10">
      <div className="bg-[#ebf2ff] rounded-[60px] lg:px-5  py-10 md:py-10 px-2 md:px-5 xl:py-20">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl capitalize lg:pb-5">
          Featured companies actively hiring
        </h1>

        {isLoading ? (
          <SkeletonLoader className=" w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden xl:grid-cols-4 gap-8 py-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <CompanySkeleton
                className={`hidden ${
                  i == 0
                    ? "flex"
                    : i == 1
                    ? "md:flex"
                    : i == 2
                    ? "lg:flex"
                    : i == 3
                    ? "xl:flex"
                    : "hidden"
                }`}
              />
            ))}
          </SkeletonLoader>
        ) : (
          <Slider {...settings} className="py-10 mb-10 w-full ">
            {companies.data.map(
              ({ _id, img, companyLogo, name, rating, reviews }) => (
                <CompanyCard
                  key={_id}
                  id={_id}
                  img={companyLogo}
                  name={name}
                  rate={rating}
                  reviews={reviews}
                  className={` self-center  shadow-sm hover:scale-105 hover:shadow-lg transition ease-in-out delay-150 duration-300 bg-thm_card ${
                    companies.data.length > 4
                      ? "xl:w-[60%] lg:w-[70%] w-[75%]"
                      : "xl:w-[60%] lg:w-[70%]  w-[75%]"
                  } `}
                />
              )
            )}
          </Slider>
        )}
        <NavLink
          to="/company"
          className="text-white bg-blue-400 hover:bg-blue-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300  font-bold  border-none px-5 py-4 rounded-lg"
        >
          View all companies
        </NavLink>
      </div>
    </div>
  );
};
