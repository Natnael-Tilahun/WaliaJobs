import React from "react";
import { CompanyReviews } from "../../components/CompanyReviews";
import { ReviewData } from "../../../data/reviews";
import { useParams } from "react-router-dom";
import { useGetCompaniesQuery } from "../../app/CompaniesApi";
import { NoResultFound } from "../../components/NoResultFound";

export const Reviews = () => {
  const { id } = useParams();
  let companyReviews;
  const {
    data: companies = [],
    isLoading,
    isError,
    error,
  } = useGetCompaniesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (!isLoading) {
    companyReviews = companies.data.filter((company) => company._id == id)[0]
      .userReview;
  }
  return (
    <div className="flex gap-10  flex-col pt-3  md:py-5  md:px-5 lg:px-10 px-5">
      <h1 className="font-semibold text-lg lg:text-2xl text-center">
        Company Reviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-10 md:flex-row md:py-5">
        {isLoading ? (
          <div className="h-full bg-slate-500">Company Reviews Loading ...</div>
        ) : isError && error.status == 500 ? (
          <NoResultFound title="Error" message={error} />
        ) : companyReviews.length > 0 ? (
          companyReviews.map((review) => (
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
          ))
        ) : (
          <NoResultFound
            message="No user reviews found for this company. You will see the reviews as soon as the users give a review for this company."
            className="col-span-full"
          />
        )}
      </div>
    </div>
  );
};
