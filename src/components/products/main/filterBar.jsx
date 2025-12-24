import React from "react";
import { CloseIcon, DropArrowIcon } from "../../../assets/icons";

const FilterBar = ({ queryFunc }) => {
  // console.log("props props props props", queryFunc);
  return (
    <div className="flex flex-row items-center w-full justify-center sm:justify-between ">
      <div className="flex w-full gap-16">
        <div className="sm:flex gap-2 text-2xl hidden">
          <p className="">FILTER</p>
          <p className="text-darkGreyText">120 results</p>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-2">
            <li className="bg-darkGrey px-3 py-2 rounded-full">Reset all</li>
            <li className="bg-lightGrayBg px-3 py-2.5 rounded-full flex gap-2">
              <p>English</p> <CloseIcon />
            </li>
            <li className="bg-lightGrayBg px-3 py-2.5 rounded-full flex gap-2">
              <p>Hardcover</p>
              <CloseIcon />
            </li>
            <li className="bg-lightGrayBg px-3 py-2.5 rounded-full flex gap-2">
              <p> Rib Knits</p> <CloseIcon />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span className="relative -left-24">
          <input
            type="text"
            className="border p-2 rounded-lg h-[5vh] "
            placeholder="Search"
            name="searchInput"
            onChange={(e) => {
              queryFunc(e.target.value);
            }}
          />

          <DropArrowIcon classname="absolute top-2 right-4 " fill="white" />
        </span>
      </div>
    </div>
  );
};

export default FilterBar;
