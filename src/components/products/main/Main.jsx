import React from "react";

import FilterBar from "./filterBar";
import SideBar from "./SideBar";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10">
      <div>
        <FilterBar />
      </div>
      <div className="bg-grayBg mt-10">
        <div>
          <SideBar />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
