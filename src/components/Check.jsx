import React, { useState } from "react";
import checkSvgPath from "../../public/icon-check.svg";

const Check = ({ isChecked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`check-btn rounded-full w-5 h-5 lg:w-6 lg:h-6 grid place-content-center ${
        isChecked ? "check-btn--checked" : "bg-inherit"
      }`}
    >
      {isChecked && <img src={checkSvgPath} alt="checkmark" />}
    </button>
  );
};

export default Check;
