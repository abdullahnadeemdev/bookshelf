import { Bookmark } from "../../../assets/icons";
import Fyodor from "../../../assets/images/Fyodor-Dostoyevskiy.jpg";

const CardAuthor = (props) => {
  return (
    <div className="max-w-75 max-h-49 bg-white rounded-2xl text-black flex ">
      <div className="max-w-30 max-h-49 ">
        <img
          src={props.image}
          alt=""
          className="object-cover h-full w-full rounded-l-2xl"
        />
      </div>
      <div className="w-full px-2">
        <div className="flex justify-between mt-2 items-center w-full">
          <p className="">{props.book}</p>
          <Bookmark />
        </div>
        <p className="text-xl ">{props.author}</p>
      </div>
    </div>
  );
};

export default CardAuthor;
