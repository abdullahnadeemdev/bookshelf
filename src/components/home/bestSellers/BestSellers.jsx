import Card from "./Card";
// import Card from "../../container/CardContainerBestSellers";
import { ArrayProducts as array } from "../../../utils/utils";
import { useNavigate } from "react-router";
import { useState } from "react";

const BestSellers = () => {
  const [num, setNum] = useState(8);
  const newArr = array.slice(22);
  const navigate = useNavigate();
  const handLeClick = () => {
    navigate("/books");
  };
  // const { height, width } = useWindowDimensions();

  return (
    <div className="h-fit 2xl:h-fit py-10 max-w-[1430px] w-full px-4">
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-4xl ">
        BESTSELLERS
      </h1>
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
        "
      >
        {newArr.map((item, index) =>
          index === num ? (
            <div
              key={index}
              onClick={handLeClick}
              className="
                h-full
                min-h-[220px]
               bg-yellow
                rounded-2xl
                text-black
                flex
                items-center
                justify-center
                text-2xl
                font-semibold
                cursor-pointer
                hover:scale-[1.02]
                transition
                  "
            >
              SEE ALL
            </div>
          ) : (
            <Card
              key={index}
              id={item.id}
              image={item.image}
              author={item.author}
              title={item.title}
              comts={item.comts}
              star={item.star}
              people={item.people}
              price={item.price}
              saleP={item.saleP}
              type={item.type}
              publishDate={item.publishDate}
              lang={item.lang}
              pages={item.pages}
              readTime={item.readTime}
              cover={item.cover}
              publisher={item.publisher}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BestSellers;
