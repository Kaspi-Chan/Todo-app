import React, { useState } from "react";
import checkSvgPath from "../../public/icon-check.svg";

const Check = ({ isChecked }) => {
  return (
    <button
      className={`rounded-full w-6 h-6 grid place-content-center border border-light-dark-grayish-blue ${
        isChecked ? "bg-check-background" : "bg-inherit"
      }`}
    >
      {isChecked && <img src={checkSvgPath} alt="checkmark" />}
    </button>
  );
};

export default Check;
