import React from "react";
import { CompanyReviews } from "../../components/CompanyReviews";
import { ReviewData } from "../../../data/reviews";

export const Reviews = () => {
  return (
    <div className="flex gap-10 md:py-0 flex-col  py-5  md:px-5 lg:px-10 px-5">
      <h1 className="font-semibold text-2xl text-center">Company Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5">
        {ReviewData.map((review) => (
          <CompanyReviews
            key={review.id}
            name={review.name}
            rate={review.rate}
            reviewLike={review.reviewLike}
            reviewDislike={review.reviewDislike}
            img={review.img}
            companyName={review.companyName}
            jobTitle={review.jobTitle}
            date={review.date}
          />
        ))}
      </div>
    </div>
  );
};
