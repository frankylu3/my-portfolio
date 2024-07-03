import React from "react";

function Heading({ value }) {
  return (
    <div className="items-center pt-5 grid grid-cols-4">
      <div className="col-span-2">
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
      <div className="col-span-2 h-1 w-full bg-blue-300"></div>
    </div>
  );
}

export default Heading;
