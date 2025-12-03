import { useState } from "react";
import { Bookmark, Comment, Star } from "../../../assets/svgs";
const Card = (props) => {
  //   console.log("props.index", props.comts);
  //   props.comts === 9999 ? setCheck(true) : '';

  return (
    <>
      {props.title === "SEE ALL" ? (
        <div className="bg-yellow min-h-48 min-w-65  md:w-90 lg:w-110 lg:h-70 rounded-2xl text-black sm:text-4xl flex items-center justify-center">
          <h1>SEE ALL</h1>
        </div>
      ) : (
        <div className="bg-white w-fit xs:max-w-104 sm:max-w-74 md:min-w-90 lg:min-w-110 p-4 rounded-2xl flex gap-3">
          <div className="h-40 w-25 md:h-50 md:w-35 lg:h-56 lg:w-60 rounded-2xl overflow-hidden">
            <img
              src={props.image}
              alt="AfterDark book"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-black ">
            <div className="flex justify-between bg-amber-300 md:w-45 lg:w-60 md:mb-4  lg:mb-6">
              <span className="pr-2">
                <p className="text-sm md:text-base ">{props.author}</p>
                <p className="font-semibold text-wrap text-xs md:text-base bg-green-300 w-26 overflow-hidden lg:overflow-visible mb-1 sm:max-w-46 h-7 lg:h-10">
                  {props.title}
                </p>
              </span>
              <Bookmark />
            </div>

            <span className="flex items-center text-sm md:text-base gap-1 border rounded-full mt-2 md:mt-0 md:p-1 w-fit px-1.5 md:px-3 mb-2">
              <p>{props.comts}</p>
              <Comment />
            </span>

            <span className="flex items-center text-sm md:text-base gap-1 border rounded-full mb-4 md:p-1 w-fit px-1 md:px-3 md:mb-6 lg:mb-8">
              <p>{props.star}</p>
              <Star />
              <p>({props.people})</p>
            </span>

            <span className="flex gap-1">
              <p className="line-through text-greyText text-lg">
                {props.price}
              </p>
              <p className="text-lg"> ${props.saleP}</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
