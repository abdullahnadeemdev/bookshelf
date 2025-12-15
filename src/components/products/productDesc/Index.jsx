import React from "react";
import Description from "./Description.jsx";
import Suggestion from "./Suggestion.jsx";
import Review from "./Review.jsx";

const Index = () => {
  return (
    <div className="">
      <div className=" my-5 px-4 max-w-[1440px] mx-auto rounded-2xl">
        <Description />
        {/* <Suggestion /> */}
        <Review />
      </div>
    </div>
  );
};

export default Index;
