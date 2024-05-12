import React, { useState } from "react";
import checkSvgPath from "../../public/icon-check.svg";

const Check = ({ isChecked }) => {
  return (
    <button
      className={`check-btn rounded-full w-5 h-5 lg:w-6 lg:h-6 grid place-content-center border-2 border-solid border-light-dark-grayish-blue dark:border-dark-extra-dark-grayish-blue ${
        isChecked ? "bg-check-background" : "bg-inherit"
      }`}
    >
      {isChecked && <img src={checkSvgPath} alt="checkmark" />}
    </button>
  );
};

export default Check;
