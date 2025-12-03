import { useState } from "react";
import { Bookmark, Comment, Star } from "../../../assets/svgs";
const Card = (props) => {
  //   console.log("props.index", props.comts);
  //   props.comts === 9999 ? setCheck(true) : '';

  return (
    <>
      {props.comts === 9999 ? (
        <div className="bg-yellow min-h-48 min-w-65 sm:w-110 sm:h-70 rounded-2xl text-black sm:text-4xl flex items-center justify-center">
          <h1>SEE ALL</h1>
        </div>
      ) : (
        <div className="bg-white w-fit sm:w-110 p-4 rounded-2xl flex gap-3">
          <div className="h-40 w-25 sm:h-56 sm:w-60 rounded-2xl overflow-hidden">
            <img
              src={props.image}
              alt="AfterDark book"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-black">
            <div className="flex justify-between sm:w-60  sm:mb-6">
              <span className="pr-2">
                <p className="text-sm sm:text-base">{props.author}</p>
                <p className="font-semibold text-wrap text-sm sm:text-base max-w-20 overflow-hidden sm:overflow-visible mb-1 sm:max-w-46 h-10">
                  {props.title}
                </p>
              </span>
              <Bookmark />
            </div>
            <span className="flex items-center text-sm sm:text-base gap-1 border rounded-full sm:p-1 w-fit px-1 sm:px-3 mb-2">
              <p>{props.comts}</p>
              <Comment />
            </span>
            <span className="flex items-center text-sm sm:text-base gap-1 border rounded-full sm:p-1 w-fit px-1 sm:px-3 mb-2 sm:mb-8">
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
