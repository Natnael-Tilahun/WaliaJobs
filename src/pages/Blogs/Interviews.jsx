import React from "react";
import { BlogCard } from "../../components/BlogCard";

export const Interviews = () => {
  return (
    <div className="flex gap-10 md:py-10  py-5  md:px-5 lg:px-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5">
        <BlogCard
          img="/blogInterviewImg0.jpg"
          title="Questions and Answers about Commercial Bank of Ethiopia"
          date="July 10, 2023"
          description="How should I prepare for an interview at Commercial Bank of Ethiopia? It seems that the interview process at Commercial Bank of Ethiopia is more of a discussion than an actual interview. The interviewers may ask about your experiences, skills, and knowledge related to the banking sector, and they may also ask behavioral questions to assess your personality and work ethic"
        />
        <BlogCard
          img="/blogInterviewImg1.png"
          title="Banking Interview Questions"
          date="Mar 10, 2023"
          description="1. Why do you want to work in the banking industry?

          This general banking interview questions and answers is asked by the interviewer to know your general affinity to the banking sector.  When answering this question in an interview, it’s important to be authentic and specific. Explain your motivations for wanting to work in the banking industry, and how your skills and experience align with the available opportunities."
        />
        <BlogCard
          img="/blogInterviewImg2.png"
          title='How to answer the "TELL ME ABOUT YOURSELF" interview questions?'
          date="July 10, 2023"
          description="Do you struggle with how to answer tell me about yourself in an interview? The question that only you can answer perfectly, and the most difficult question asked in almost all the interviews is – About You. You need proper skills to answer this question with perfection that should not give a fake image of yours nor should it diminish your capabilities. "
        />
        <BlogCard
          img="/blogInterviewImg3.jpg"
          title="Top Behavioral Interview Questions"
          date="June 10, 2023"
          description="What Are Behavioral Interview Questions?
          A behavioral interview is an interviewing method and a significant chunk of the interview process during which the interviewer evaluates a candidate’s general behavior in specific situations to understand how they interpret things or respond to a situation."
        />
        <BlogCard
          img="/blogInterviewImg4.jpg"
          title="Web Designer Interview Questions"
          date="Aug 1, 2023"
          description="Top Web Design Interview Questions
          Here are Web Designing interview questions and answers for freshers as well as experienced website designer candidates to get their dream job."
        />
        <BlogCard
          img="/blogInterviewImg5.jpg"
          title="Frontend Inerview Questions"
          date="Sep 10, 2023"
          description="Frontend Developers are in demand today. A lot of companies are readily hiring them with attractive salary packages. If you believe you possess the skills to become a frontend developer and wish to make a career in it, then you’re in the right place. This tutorial on Frontend Developer Interview Questions will help you crack your next interview. This Frontend Developer Interview Questions tutorial has put together questions on various languages and frameworks used for frontend development."
        />
        <BlogCard
          img="/blogInterviewImg6.png"
          title="57 Common Interview Questions"
          date="Feb 10, 2023"
          description="This article discusses 57 common interview questions, answers and examples. It gives tips on how to answer questions that are likely to be asked in interviews..

          The best practice for answering common interview questions is to prepare ahead, think carefully about your answers, internalize and personalize your answers and deliver them in a genuine and enthusiastic way."
        />
      </div>
    </div>
  );
};
