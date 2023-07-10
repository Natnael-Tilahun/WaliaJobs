import React from "react";
import { BlogCard } from "../../components/BlogCard";

export const Tips = () => {
  return (
    <div className="flex gap-10 md:py-10  py-5  md:px-5 lg:px-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5">
        <BlogCard
          id="1"
          img="blogimg6.jpg"
          title="5 Best carrier tips for young people"
          date="Jul 8, 2023"
          description=" I made a lot of mistakes at the beginning of my career. I didn’t have
          a mentor or anyone to show me the ropes, so I was left to do what I
          thought was right. But in many cases, what I thought was a great
          choice ended up not being the best option. Everything worked out in
          the end, but I could have saved myself some headaches and stress if I
          had listened to quality career advice."
        />
        <BlogCard
          id="2"
          img="blogimg1.jpg"
          title="10 Tips for your job search"
          date="Jul 8, 2023"
          description=" I made a lot of mistakes at the beginning of my career. I didn’t have
          a mentor or anyone to show me the ropes, so I was left to do what I
          thought was right. But in many cases, what I thought was a great
          choice ended up not being the best option. Everything worked out in
          the end, but I could have saved myself some headaches and stress if I
          had listened to quality career advice."
        />
        <BlogCard
          id="3"
          img="blogimg2.png"
          title="15 Job Search Tips Guaranteed To Get You Hired"
          date="June 18, 2023"
          description=" I made a lot of mistakes at the beginning of my career. I didn’t have
          a mentor or anyone to show me the ropes, so I was left to do what I
          thought was right. But in many cases, what I thought was a great
          choice ended up not being the best option. Everything worked out in
          the end, but I could have saved myself some headaches and stress if I
          had listened to quality career advice."
        />
        <BlogCard
          id="4"
          img="blogimg3.png"
          title="Social Media Tips For Job Seekers"
          date="May 10, 2023"
          description=" I made a lot of mistakes at the beginning of my career. I didn’t have
          a mentor or anyone to show me the ropes, so I was left to do what I
          thought was right. But in many cases, what I thought was a great
          choice ended up not being the best option. Everything worked out in
          the end, but I could have saved myself some headaches and stress if I
          had listened to quality career advice."
        />
        <BlogCard
          id="5"
          img="blogimg4.jpg"
          title="Tips For A Successful Job Search"
          date="Feb 1, 2023"
          description=" I made a lot of mistakes at the beginning of my career. I didn’t have
          a mentor or anyone to show me the ropes, so I was left to do what I
          thought was right. But in many cases, what I thought was a great
          choice ended up not being the best option. Everything worked out in
          the end, but I could have saved myself some headaches and stress if I
          had listened to quality career advice."
        />
      </div>
    </div>
  );
};
