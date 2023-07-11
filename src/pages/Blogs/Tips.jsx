import React, { useState, useEffect } from "react";
import { BlogCard } from "../../components/BlogCard";
import { BlogsData } from "../../../data/blogs";
import { NavLink, useParams } from "react-router-dom";

export const Tips = () => {
  const { id } = useParams();

  const [tipsBlogData, setTipsBlogData] = useState([]);
  useEffect(() => {
    const tipsBlog = BlogsData.filter((blog) => blog.type == "tips");
    setTipsBlogData(tipsBlog);
  }, [id]);
  return (
    <div className="flex gap-10 md:py-10  py-5  md:px-5 lg:px-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5">
        {tipsBlogData.map(({ id, title, img, date, description }) => (
          <BlogCard
            blogId={id}
            key={id}
            img={img}
            title={title}
            date={date}
            description=" I made a lot of mistakes at the beginning of my career. I didn’t have
          a mentor or anyone to show me the ropes, so I was left to do what I
          thought was right. But in many cases, what I thought was a great
          choice ended up not being the best option. Everything worked out in
          the end, but I could have saved myself some headaches and stress if I
          had listened to quality career advice."
          />
        ))}
      </div>
    </div>
  );
};
