import AfterDark from "../../../assets/images/Murakami.png";
import { Bookmark, Comment, Star } from "../../../assets/svgs";
const Card = () => {
  return (
    <div className="bg-white w-100 p-4 rounded-2xl flex gap-3">
      <div className="h-53 w-35">
        <img
          src={AfterDark}
          alt="AfterDark book"
          className="h-full w-full object-cover object-center rounded-2xl"
        />
      </div>
      <div className="text-black">
        <div className="flex justify-between w-50 mb-8">
          <span>
            <p>Murakami</p>
            <p className="font-semibold">AfterDark</p>
          </span>
          <Bookmark />
        </div>
        <span className="flex items-center gap-1 border rounded-full p-1 w-fit px-3 mb-2">
          <p>5</p>
          <Comment />
        </span>
        <span className="flex items-center gap-1 border rounded-full p-1 w-fit px-3 mb-8">
          <p>4.0</p>
          <Star />
          <p>(100)</p>
        </span>
        <span className="flex gap-1">
          <p className="line-through text-greyText">$15.50</p>
          <p>$10.50</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
