import React from "react";

function Review({ children }) {
  return (
    <div className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl text-white">
      {children}
    </div>
  );
}

export default Review;
