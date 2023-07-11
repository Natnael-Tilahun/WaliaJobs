import React, { useState, useEffect } from "react";
import { BlogCard } from "../../components/BlogCard";
import { BlogsData } from "../../../data/blogs";

export const Interviews = () => {
  const [interviewBlogsData, setInterviewBlogsData] = useState([]);
  useEffect(() => {
    const interviewBlogs = BlogsData.filter((blog) => blog.type == "interview");
    setInterviewBlogsData(interviewBlogs);
  }, []);
  return (
    <div className="flex gap-10 md:py-10  py-5  md:px-5 lg:px-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5">
        {interviewBlogsData.map(({ id, title, date, img, description }) => (
          <BlogCard
            key={id}
            blogId={id}
            img={img}
            title={title}
            date={date}
            description="How should I prepare for an interview at Commercial Bank of Ethiopia? It seems that the interview process at Commercial Bank of Ethiopia is more of a discussion than an actual interview. The interviewers may ask about your experiences, skills, and knowledge related to the banking sector, and they may also ask behavioral questions to assess your personality and work ethic"
          />
        ))}
      </div>
    </div>
  );
};
