/** @format */

import React, { useState } from "react";

const Button = ({ value, active, onClick }) => {
  const buttonStyle =
    "border border-[#c9d1d2] bg-transparent text-[#949aa1] text-[1.2rem] px-5 py-2 rounded-[0.1rem] hover:bg-[#485461] hover:text-[#fff] transition duration-200 ease-in";

  const activeButton = "bg-[#c9d1d2] ";
  return (
    <button
      onClick={() => onClick()}
      className={active ? activeButton + buttonStyle : buttonStyle}
    >
      {value}
    </button>
  );
};

export default Button;
