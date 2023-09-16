import React from "react";

export const ErrorMessageComponent = ({ text, msg }) => {
  return (
    <p className="text-red-600 text-sm block w-full">
      {text} {msg}
    </p>
  );
};
