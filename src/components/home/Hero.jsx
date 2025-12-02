import React from "react";
import Button from "../shared/button/Button";

const Hero = () => {
  return (
    <div className="text-center">
      <p className="py-6 text-[83px] text-grayBg font-semibold text-wrap">
        READING MAKES THE WORLD HUGE
      </p>

      <div>
        <div className="bg-grayBg rounded-xl text-start p-4 w-fit max-w-md">
          <p className="text-wrap text-3xl pr-40 mb-10">
            FIND SOMETHING TO READ
          </p>
          <p className="text-wrap">
            Fancy something unusual and unpredictable? Funny or exciting? No
            problem. Check out the collections we have prepared for you.
          </p>
          <Button variant="outline">BROWSE NOW</Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
