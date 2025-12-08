import { Bookmark } from "../../../assets/icons";
import Fyodor from "../../../assets/images/Fyodor-Dostoyevskiy.jpg";

const CardAuthor = (props) => {
  return (
    <>
      {props.author === "SEE ALL" ? (
        <div
          className="
              flex
              text-black
              bg-yellow
              rounded-2xl
              items-center justify-center
w-[19vw] h-[25vh] lg:h-[20vh]             
            "
        >
          <h1>SEE ALL</h1>
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col sm:w-[30vw] lg:w-[19vw] h-[25vh] lg:h-[20vh] bg-white rounded-2xl text-black ">
          <div className="lg:min-w-10 lg:max-w-40 lg:max-h-49 min-h-28 max-h-28 min-w-fit w-full ">
            <img
              src={props.image}
              alt=""
              className="object-cover h-full w-full rounded-l-2xl grayscale-100"
            />
          </div>
          <div className="w-full px-2">
            <div className="flex md:mb-4 justify-between mt-2 items-center ">
              <p className="w-20">{props.book}</p>
              {props.book ? <Bookmark /> : ""}
            </div>
            <p className="sm:text-base lg:text-xl lg:max-w-30 text-wrap">
              {props.author}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardAuthor;
