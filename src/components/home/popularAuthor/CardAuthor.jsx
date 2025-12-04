import { Bookmark } from "../../../assets/icons";
import Fyodor from "../../../assets/images/Fyodor-Dostoyevskiy.jpg";

const CardAuthor = (props) => {
  //   console.log("props", props);
  return (
    <>
      {props.author === "SEE ALL" ? (
        <div
          //   className="w-100 bg-amber-800"
          className="
              flex
              text-black
              bg-yellow
              rounded-2xl
              items-center justify-center
              w-[23.5vw] max-h-49
             
            "
        >
          <h1>SEE ALL</h1>
        </div>
      ) : (
        <div className="w-[23.5vw] h-[20vh] bg-white rounded-2xl text-black flex ">
          <div className="min-w-10 max-w-30 max-h-49 ">
            <img
              src={props.image}
              alt=""
              className="object-cover h-full w-full rounded-l-2xl"
            />
          </div>
          <div className="w-full px-2">
            <div className="flex mb-4 justify-between mt-2 items-center ">
              <p className="w-20">{props.book}</p>
              {props.book ? <Bookmark /> : ""}
            </div>
            <p className="text-2xl max-w-30">{props.author}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardAuthor;
