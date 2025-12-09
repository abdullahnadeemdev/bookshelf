import React from "react";
import { DropArrowIcon } from "../../../assets/icons";

const SideBar = () => {
  return (
    <div className="bg-whiteBg w-[20vw] text-black p-4 rounded-xl mt-4">
      <div>
        <h3 className="text-lg  sm:text-xl md:text-2xl font-semibold">
          Categories
        </h3>
        <input
          type="text"
          name="categoryInput"
          id="categoryInput"
          className="p-2 bg-lGrayBg rounded-xl my-3 w-[14vw] text-xs sm:text-sm md:text-base"
          placeholder="FIND CATEGORY"
        />
        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">
            Imaginative Literature
          </p>
          <DropArrowIcon classname=" mt-1 " />
        </span>

        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">
            Scientific Literature
          </p>
          <DropArrowIcon classname=" mt-1 " />
        </span>

        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">Business</p>
          <DropArrowIcon classname=" mt-1 " />
        </span>

        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">Educational</p>
          <DropArrowIcon classname=" mt-1 " />
        </span>

        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">Other</p>
          <DropArrowIcon classname=" mt-1 " />
        </span>
      </div>

      <div>
        <h3 className="mt-10 text-lg  sm:text-xl md:text-2xl font-semibold">
          PUBLISH DATE
        </h3>
        <span className="relative">
          <input
            type="text"
            name="yearsInput"
            id="yearsInput"
            className="p-2 border text-black border-black rounded-xl my-3 w-[12vw]"
            placeholder="All Years"
          />
          <DropArrowIcon classname="absolute top-2 right-4 " />
        </span>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          Language
        </h3>
        <div className="flex flex-col gap-2">
          <span className="flex gap-1 mt-2">
            <input type="checkbox" name="engCheck" />
            <label htmlFor="engCheck" className="">
              English
            </label>
          </span>

          <span className="flex gap-1">
            <input type="checkbox" name="russianCheck" />
            <label htmlFor="russianCheck">Russian</label>
          </span>

          <span className="flex gap-1 mb-2">
            <input type="checkbox" name="urduCheck" />
            <label htmlFor="urduCheck">Urdu</label>
          </span>
        </div>

        <p className="underline text-sm">VIEW ALL</p>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          Price
        </h3>

        <div className="flex gap-2 lg:gap-4 items-center">
          <p className="bg-g rounded-lg bg-lGrayBg py-2 px-3">$5</p>
          <p>to</p>
          <p className="bg-g rounded-lg bg-lGrayBg py-2 px-3">$60</p>
        </div>
        <span className="border ">slider</span>
        <p className="text-sm underline mt-2">Reset</p>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          PUBLISHING HOUSE
        </h3>

        <div className="flex flex-col lg:gap-2">
          <span className="flex gap-1 mt-2">
            <input type="checkbox" name="ribCheck" />
            <label htmlFor="ribCheck" className="">
              Rib Knits
            </label>
          </span>

          <span className="flex gap-1">
            <input type="checkbox" name="panneCheck" />
            <label htmlFor="panneCheck">Panne Velvet</label>
          </span>

          <span className="flex gap-1 mb-2">
            <input type="checkbox" name="fabricCheck" />
            <label htmlFor="fabricCheck">Elasticized Fabrics</label>
          </span>

          <span className="flex gap-1 mb-2">
            <input type="checkbox" name="dottedCheck" />
            <label htmlFor="dottedCheck">Dotted Swiss</label>
          </span>
          <span className="flex gap-1 mb-2">
            <input type="checkbox" name="dKnitCheck" />
            <label htmlFor="dKnitCheck">Double Knit</label>
          </span>
        </div>

        <p className="underline text-sm">VIEW ALL</p>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          COVER STYLE
        </h3>

        <div className="flex flex-col gap-2">
          <span className="flex gap-1 mt-2">
            <input type="radio" name="hardCoverRadio" />
            <label htmlFor="hardCoverRadio" className="">
              Hardcover
            </label>
          </span>

          <span className="flex gap-1">
            <input type="radio" name="softCoverRadio" />
            <label htmlFor="softCoverRadio">Softcover</label>
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          OTHER
        </h3>
        <span className="flex gap-2 mt-2">
          <input type="checkbox" name="ratingCheck" />
          <label htmlFor="ratingCheck" className="">
            4+ stars
          </label>
        </span>
      </div>
    </div>
  );
};

export default SideBar;
