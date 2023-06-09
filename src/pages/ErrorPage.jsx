import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center w-full md:h-[calc(100vh-325px)] h-[calc(100vh-340px)] gap-8"
    >
      <h1 className="font-bold text-2xl text-thm_primary_color">Oops!</h1>
      <p className="text-lg font-medium text-thm_secondary_color">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-thm_secondary_color italic">Not Found</p>
      <Link to="/" className="text-thm_secondary_color text-lg font-light">
        Back to{" "}
        <span className="text-thm_root1_color underline text-xl pl-1">
          Home
        </span>
      </Link>

      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
};
