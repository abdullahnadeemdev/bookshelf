import React from "react";
import Button from "../shared/button/Button";
import { SearchIcon } from "../../assets/icons";

const Hero = () => {
  return (
    <div className="text-center">
      <p className="py-6 text-[83px] text-grayBg font-semibold text-wrap ">
        READING MAKES THE WORLD HUGE
      </p>

      <div className="relative">
        <div className="bg-grayBg rounded-xl text-start p-4 w-fit max-w-xl">
          <p className="text-wrap text-3xl pr-70 mb-6 z-2">
            FIND SOMETHING TO READ
          </p>
          <SearchIcon className="absolute -top-10 h-100! w-100! z-0 left-55 rotate-90 stroke-black!" />
          <p className="text-wrap mb-18 pr-40 z-2">
            Fancy something unusual and unpredictable? Funny or exciting? No
            problem. Check out the collections we have prepared for you.
          </p>
          <Button variant="outline" className="z-2">
            BROWSE NOW
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
