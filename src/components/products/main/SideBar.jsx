import React from "react";
import { DropArrowIcon } from "../../../assets/icons";

const SideBar = () => {
  return (
    <div className="bg-whiteBg w-75 text-black p-4 rounded-xl mt-4">
      <div>
        <h3 className="text-2xl font-semibold ">Categories</h3>
        <input
          type="text"
          name=""
          id=""
          className="p-2 bg-lGrayBg rounded-xl my-3 w-[12vw]"
          placeholder="FIND CATEGORY"
        />
        <span className="flex gap-2 items-center">
          <p>Imaginative Literature</p>
          <DropArrowIcon classname="stroke-black mt-1 " />
        </span>
        <span className="flex gap-2 items-center">
          <p>Scientific Literature</p>
          <DropArrowIcon classname="stroke-black mt-1 " />
        </span>
        <span className="flex gap-2 items-center">
          <p>Business</p>
          <DropArrowIcon classname="stroke-black mt-1 " />
        </span>
        <span className="flex gap-2 items-center">
          <p>Educational</p>
          <DropArrowIcon classname="stroke-black mt-1 " />
        </span>
        <span className="flex gap-2 items-center">
          <p>Other</p>
          <DropArrowIcon classname="stroke-black mt-1 " />
        </span>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mt-10">PUBLISH DATE</h3>
        <span className="relative">
          <input
            type="text"
            name=""
            id=""
            className="p-2 border text-black border-black rounded-xl my-3 w-[12vw]"
            placeholder="All Years"
          />
          <DropArrowIcon classname="absolute top-2 right-4 stroke-black" />
        </span>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mt-10">Language</h3>
        <div className="flex flex-col gap-2">
          <span className="flex gap-1 mt-2">
            <input type="checkbox" />
            <label htmlFor="" className="">
              English
            </label>
          </span>

          <span className="flex gap-1">
            <input type="checkbox" />
            <label htmlFor="">Russian</label>
          </span>

          <span className="flex gap-1 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Urdu</label>
          </span>
        </div>

        <p className="underline text-sm">VIEW ALL</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mt-10">Price</h3>
        <div className="flex gap-4 items-center">
          <p className="bg-g rounded-lg bg-lGrayBg py-2 px-3">$5</p>
          <p>to</p>
          <p className="bg-g rounded-lg bg-lGrayBg py-2 px-3">$60</p>
        </div>
        <span className="border ">slider</span>
        <p className="text-sm underline mt-2">Reset</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mt-10">PUBLISHING HOUSE</h3>
        <div className="flex flex-col gap-2">
          <span className="flex gap-1 mt-2">
            <input type="checkbox" />
            <label htmlFor="" className="">
              Rib Knits
            </label>
          </span>

          <span className="flex gap-1">
            <input type="checkbox" />
            <label htmlFor="">Panne Velvet</label>
          </span>

          <span className="flex gap-1 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Elasticized Fabrics</label>
          </span>

          <span className="flex gap-1 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Dotted Swiss</label>
          </span>
          <span className="flex gap-1 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Double Knit</label>
          </span>
        </div>

        <p className="underline text-sm">VIEW ALL</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mt-10">COVER STYLE</h3>
        <div className="flex flex-col gap-2">
          <span className="flex gap-1 mt-2">
            <input type="radio" />
            <label htmlFor="" className="">
              Hardcover
            </label>
          </span>

          <span className="flex gap-1">
            <input type="radio" />
            <label htmlFor="">Softcover</label>
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mt-10">OTHER</h3>
        <span className="flex gap-2 mt-2">
          <input type="checkbox" />
          <label htmlFor="" className="">
            4+ stars
          </label>
        </span>
      </div>
    </div>
  );
};

export default SideBar;
