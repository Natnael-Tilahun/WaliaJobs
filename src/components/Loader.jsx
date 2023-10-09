import React from "react";

const Loader = () => {
  return (
    <div>
      <div class="items-center animate-spin justify-center rounded-full w-16 h-16 bg-gradient-to-tr from-thm_root1_color to-thm_root2_color">
        <div class="h-6 w-6 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
};

export default Loader;
