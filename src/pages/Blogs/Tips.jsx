import React from "react";
import { BlogCard } from "../../components/BlogCard";

export const Tips = () => {
  return (
    <div className="flex gap-10 md:py-10  py-5  md:px-5 lg:px-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 flex-col gap-6 md:gap-10 lg:gap-10 md:flex-row py-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
