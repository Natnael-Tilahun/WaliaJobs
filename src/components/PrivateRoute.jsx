import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

function PrivateRoute({ children }) {
  const { name } = useSelector((state) => state.auth);
  return name ? children : <LoadingToRedirect />;
}

export default PrivateRoute;
