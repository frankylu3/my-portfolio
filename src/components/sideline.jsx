import React from "react";

function Sideline({ show, side }) {
  if (show === true && side === "left") {
    return <div className="h-auto w-1 bg-blue-300"></div>;
  } else if (show === true && side === "right") {
    return <div className="h-auto w-1 bg-blue-300 ml-10"></div>;
  } else if (show === false && side === "right") {
    return <div className="h-auto w-1 bg-transparent ml-10"></div>;
  } else if (show === false && side === "left") {
    return <div className="h-auto w-1 bg-transparent"></div>;
  }
}

export default Sideline;
