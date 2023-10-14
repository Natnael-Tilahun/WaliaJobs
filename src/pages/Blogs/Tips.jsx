import React, { useState, useEffect } from "react";
import { BlogCard } from "../../components/BlogCard";
import { BlogsData } from "../../../data/blogs";
import { NavLink, useParams } from "react-router-dom";
import { useGetBlogsQuery } from "../../app/BlogsApi";
import { NoResultFound } from "../../components/NoResultFound";
import SkeletonLoader from "../../components/SkeletonLoader";
import { BlogSkeleton } from "../../components/BlogSkeleton";

export const Tips = () => {
  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useGetBlogsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  let tipsBlogDatas;

  if (!isLoading) {
    tipsBlogDatas = blogs.data.filter((blog) => blog.blogCategory == "tips");
    console.log("blogs", tipsBlogDatas);
  }

  return (
    <div className="flex gap-10 md:py-10 justify-center  py-5  md:px-5 lg:px-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5">
        {isLoading ? (
          <SkeletonLoader className=" w-full col-span-4 h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden xl:grid-cols-4 gap-8 py-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <BlogSkeleton
                key={i}
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
        ) : tipsBlogDatas?.length > 0 ? (
          tipsBlogDatas.map(({ _id, title, img, date, description }, index) => (
            <BlogCard
              blogId={_id}
              key={_id}
              img={img}
              title={title}
              date={date}
              description={description}
            />
          ))
        ) : (
          <NoResultFound
            title="No tips blog found"
            message="Modify search criteria or create an alert to get relevant blogs as soon as they’re posted"
            className=" col-span-4 "
          />
        )}
      </div>
    </div>
  );
};
