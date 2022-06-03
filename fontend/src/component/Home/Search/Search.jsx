/** @format */
import React, { useState } from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";
import Button from "../../button/button";

const Search = () => {
  const [value, setValue] = useState("Can we help you ?");
  const [active, setActive] = useState();

  const btnArr = ["Full-time", "Part-time", "Freelance"];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center justify-between ml-[2rem] py-8"
    >
      {/* <MdYoutubeSearchedFor /> */}
      <div className="input-group flex">
        <div className="mr-5 relative">
          <FiSearch className="absolute cursor-pointer left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="working-format-box">
        {btnArr.map((btn, index) => {
          return (
            <Button
              key={index}
              value={btn}
              onClick={() => setActive(index)}
              active={index === active}
            />
          );
        })}
      </div>
    </form>
  );
};
export default Search;
