import { Bookmark, Comment, Star } from "../../../assets/icons";

const Card = (props) => {
  return (
    <div className="bg-whiteBg p-2 lg:p-4 h-fit rounded-xl md:mt-4">
      <div className="h-60 w-60 xs:h-40 xs:w-44 sm:h-40 sm:w-45 md:h-40 md:w-41.5 lg:h-[45vh] lg:w-[21vw]  relative">
        <img
          src={props.image}
          className="h-full w-full object-fit lg:object-fit rounded-xl"
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
                              
                              w-30 h-8
                              md:text-base
                              md:w-40 md:h-12
                              lg:w-50 
                              
                            "
          >
            {props.title}
          </p>
          <div className="flex gap-2 ">
            <span
              className="flex w-fit px-1 text-sm border rounded-full items-center gap-0.5 md:gap-1
                          md:p-1 md:px-3 md:text-base"
            >
              <p>{props.comts}</p>
              <Comment />
            </span>

            <span
              className="flex w-fit px-1 text-sm border rounded-full items-center gap-0.5 md:gap-1
                          md:p-1 md:px-3 md:text-base "
            >
              <p>{props.star}</p>
              <Star />
              <p>{props.people}</p>
            </span>
          </div>

          <span className="flex gap-1">
            <p className="text-greyText md:text-lg line-through">
              {props.price}
            </p>
            <p className="md:text-lg">${props.saleP}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
