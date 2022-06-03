/** @format */

import React from "react";
import data from "../../../data/data.json";
import Search from "../../Home/Search/Search";
const JobDraft = () => {
  return (
    <div className="mt-2">
      <div className="search-container">
        <Search />
      </div>
      <div className="job-heading grid grid-cols-5 text-[#c9d1d2] py-2 mx-8 px-4">
        <h3>POSITION</h3>
        <h4>COMPANY</h4>
        <h4>LOCATION</h4>
        <h4>POSTED</h4>
      </div>
      <div className="job-container">
        {data.map((job, index) => {
          return (
            <div
              className={
                `job-card items-center shadow-[5px_5px]  grid grid-cols-5 py-4 px-4 mx-8 mb-8 border border-[#c9d1d2]` +
                ` shadow-[#e0f7fa]`
              }
              key={index}
            >
              <h3 className="uppercase font-sans text-xl font-semi-bold ">
                {job.position}
              </h3>
              <h4 className="uppercase font-sans text-[0.8rem] font-semi-bold ">
                {job.company}
              </h4>
              <h4 className="uppercase font-sans text-[0.8rem] font-semi-bold ">
                {job.location}
              </h4>
              <h4 className="uppercase font-sans text-[0.8rem] font-semi-bold ">
                {job.posted}
              </h4>
              <button className="uppercase font-sans text-[1rem] text-[#949aa1] border-[0.8px] border-[#949aa1] max-w-[100%] p-5">
                More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobDraft;
