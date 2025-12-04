import { useState } from "react";
import { Bookmark, Comment, Star } from "../../../assets/icons";
const Card = (props) => {
  //   console.log("props.index", props.comts);
  //   props.comts === 9999 ? setCheck(true) : '';

  return (
    <>
      {props.title === "SEE ALL" ? (
        <div
          className="
            flex
            flex-1
            text-black
            bg-yellow
            rounded-2xl
            items-center justify-center
            sm:text-4xl
            min-w-72 min-h-48 max-w-104 max-h-auto
            sm:max-w-74
            md:min-w-90
            lg:min-w-110 lg:min-h-70
          "
        >
          <h1>SEE ALL</h1>
        </div>
      ) : (
        <div
          className="
            flex
            flex-1
            p-4
            bg-white
            rounded-2xl
            xs:max-w-104 gap-3
            sm:max-w-74
            md:min-w-90
            lg:min-w-110
          "
        >
          <div
            className="
              overflow-hidden
              h-40 w-25
              rounded-2xl
              md:h-50 md:w-35
              lg:h-56 lg:w-60
            "
          >
            <img
              src={props.image}
              alt="AfterDark book"
              className="
                object-cover
                h-full w-full
              "
            />
          </div>
          <div
            className="
              text-black
            "
          >
            <div
              className="
                flex
                justify-between
                md:w-45 md:mb-4
                lg:w-60 lg:mb-6
              "
            >
              <span
                className="
                  pr-2
                "
              >
                <p
                  className="
                    text-sm
                    md:text-base
                  "
                >
                  {props.author}
                </p>
                <p
                  className="
                    overflow-hidden
                    w-26 h-7
                    mb-1
                    font-semibold text-wrap text-xs
                    sm:max-w-46
                    md:text-base
                    lg:overflow-visible lg:h-10
                  "
                >
                  {props.title}
                </p>
              </span>
              <Bookmark />
            </div>

            <span
              className="
                flex
                w-fit
                mt-2 px-1.5 mb-2
                text-sm
                border rounded-full
                items-center gap-1
                md:mt-0 md:p-1 md:px-3 md:text-base
              "
            >
              <p>{props.comts}</p>
              <Comment />
            </span>

            <span
              className="
                flex
                w-fit
                mb-4 px-1
                text-sm
                border rounded-full
                items-center gap-1
                md:p-1 md:px-3 md:mb-6 md:text-base
                lg:mb-8
              "
            >
              <p>{props.star}</p>
              <Star />
              <p>({props.people})</p>
            </span>

            <span
              className="
                flex
                gap-1
              "
            >
              <p
                className="
                  text-greyText text-lg
                  line-through
                "
              >
                {props.price}
              </p>
              <p
                className="
                  text-lg
                "
              >
                {" "}
                ${props.saleP}
              </p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
