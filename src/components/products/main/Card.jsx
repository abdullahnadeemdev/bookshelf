import Master from "../../../assets/images/master.png";
import { Bookmark, Comment, Star } from "../../../assets/icons";

const Card = (props) => {
  return (
    <div className="bg-whiteBg p-4 h-fit rounded-xl">
      <div className="h-[45vh] w-[21vw]  relative">
        <img
          src={props.image}
          className="h-full w-full object-cover rounded-xl"
          alt=""
        />
        <Bookmark classname="absolute top-2 right-2" />
      </div>

      <div className="text-black">
        <div
          className="
              flex justify-between"
        >
          <span className="pr-2">
            <p className="text-xs text-darkGreyText md:text-sm mt-2">
              {props.author}
            </p>
          </span>
        </div>

        <div className="flex flex-col justify-between gap-5">
          <p
            className="
                              text-wrap text-xs
                              md:text-base
                              
                              
                            "
          >
            {props.title}
          </p>
          <div className="flex gap-2 ">
            <span
              className="flex w-fit px-1 text-sm border rounded-full items-center gap-1
                          md:p-1 md:px-3 md:text-base"
            >
              <p>{props.comts}</p>
              <Comment />
            </span>

            <span
              className="flex w-fit px-1 text-sm border rounded-full items-center gap-1
                          md:p-1 md:px-3 md:text-base "
            >
              <p>{props.star}</p>
              <Star />
              <p>{props.people}</p>
            </span>
          </div>

          <span className="flex gap-1">
            <p className="text-greyText text-lg line-through">{props.price}</p>
            <p className="text-lg">${props.saleP}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
