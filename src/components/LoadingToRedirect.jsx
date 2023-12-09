import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";

function LoadingToRedirect() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    count === 0 && navigate("/login", { state: { from: location } });

    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div className="h-screen w-full flex flex-col gap-5 items-center justify-center text-thm_secondary_color">
      <Loader />
      <h1>
        Redirecting you in{" "}
        <span className="text-xl text-thm_primary_color">{count} </span>sec
      </h1>
    </div>
  );
}

export default LoadingToRedirect;
