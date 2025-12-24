import React from "react";
import { CloseIcon, DropArrowIcon } from "../../../assets/icons";
import Button from "../../shared/button/Button";

const FilterBar = ({ queryFunc, setFilter, filterObj }) => {
  const handleReset = () => {
    setFilter({
      categoryInput: "",
      yearsInput: "",
      language: "",
      price: "",
      publishH: "",
      coverType: "",
      ratingCheck: "",
    });
  };

  Object.filter = (obj, checking) =>
    Object.fromEntries(Object.entries(obj).filter(checking));

  const activeFilters = Object.entries(filterObj).filter(([key, value]) => {
    return Array.isArray(value) ? value.length > 0 : value !== "";
  });

  // console.log(activeFilters);
  return (
    <div className="flex flex-row items-center w-full justify-center sm:justify-between ">
      <div className="flex w-full gap-16">
        <div className="sm:flex gap-2 text-2xl hidden">
          <p className="">FILTER</p>
          <p className="text-darkGreyText">120 results</p>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-2">
            <Button
              className="bg-darkGrey! text-whiteBg! px-3 py-2 rounded-full"
              onClick={handleReset}
            >
              Reset all
            </Button>

            {activeFilters.map(([key, value]) => (
              <>
                {console.log("heyyyyyy", key, value)}
                <li
                  key={key}
                  className="bg-lightGrayBg px-3 py-2.5 rounded-full flex items-center gap-2 text-white"
                >
                  <p className="text-sm font-medium">
                    {Array.isArray(value) ? value.join(" ") : value}
                  </p>
                  <button
                    onClick={() =>
                      setFilter((prev) => ({ ...prev, [key]: "" }))
                    }
                    className="hover:text-red-500"
                  >
                    <CloseIcon className="w-4 h-4" />
                  </button>
                </li>
              </>
            ))}

            {/* <li className="bg-lightGrayBg px-3 py-2.5 rounded-full flex gap-2">
              <p>Hardcover</p>
              <CloseIcon />
            </li>

            <li className="bg-lightGrayBg px-3 py-2.5 rounded-full flex gap-2">
              <p> Rib Knits</p> <CloseIcon />
            </li> */}
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
