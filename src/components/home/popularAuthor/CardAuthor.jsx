import { useNavigate } from "react-router";
import { Bookmark } from "../../../assets/icons";
import { useState } from "react";

const CardAuthor = (props) => {
  const navigate = useNavigate();
  const [clr, setClr] = useState("#2a2c2e");

  const handleBookmark = () => {
    clr === "#2a2c2e" ? setClr("white") : setClr("#2a2c2e");
  };

  const handleClick = () => {
    navigate("/authorsPopular");
  };
  return (
    <>
      {props.author === "SEE ALL" ? (
        <div
          onClick={handleClick}
          className="
            flex
            w-full  h-[25vh]
            md:h-[20vh]
            text-black
            bg-yellow
            rounded-[20px]
            items-center justify-center
            max-w-100
          "
        >
          <h1 className="font-bold md:text-2xl">SEE ALL</h1>
        </div>
      ) : (
        <div
          className="
            flex 
            h-[25vh]
            md:h-[20vh]
            max-w-[400px]
            text-black
            bg-white
            rounded-[20px]
          "
        >
          <div
            className="
            
            flex
            justify-center
            h-full
            lg:min-w-10 lg:max-w-40 lg:max-h-59
            flex-4
            "
          >
            <img
              src={props.image}
              alt=""
              className="
              object-cover
               xs:object-cover
                h-full w-full
                rounded-l-2xl
                grayscale-100
              "
            />
          </div>
          <div
            className="
              w-full
              px-2
              flex-5
            "
          >
            <div
              className="
                flex
                mt-2
                justify-between items-center
                mb-3
                xs:mb-8
              "
            >
              <p
                className="
                  w-20
                "
              >
                {props.book}
              </p>
              {props.book ? (
                <Bookmark fill={clr} onClick={handleBookmark} />
              ) : (
                ""
              )}
            </div>
            <p
              className="
                text-wrap
                sm:text-base
                lg:max-w-30 lg:text-xl
              "
            >
              {props.author}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardAuthor;
