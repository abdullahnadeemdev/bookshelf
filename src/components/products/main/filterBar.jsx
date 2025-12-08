import React from "react";
import { CloseIcon, DropArrowIcon } from "../../../assets/icons";

const FilterBar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-16">
        <div className="flex gap-2 text-2xl">
          <p className="">FILTER</p>
          <p className="text-darkGreyText">120 results</p>
        </div>
        <div>
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
        <span className="relative">
          <input
            type="text"
            className="border p-2 rounded-lg h-[5vh] "
            placeholder="Search"
          />

          <DropArrowIcon classname="absolute top-2 right-4" />
        </span>
      </div>
    </div>
  );
};

export default FilterBar;
