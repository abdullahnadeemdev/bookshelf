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
    <div className="h-fit 2xl:h-fit py-10 max-w-[1440px] px-4">
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-4xl ">
        BESTSELLERS
      </h1>
      <div className="flex justify-between gap-3 md:mx-1 flex-wrap">
        {newArr.map((item, index) =>
          index === num ? (
            <div
              key={index}
              onClick={handLeClick}
              className="
            flex
            flex-1
            text-black
            bg-yellow
            rounded-[20px]
            items-center justify-center
            sm:text-4xl
            min-w-42 min-h-48 max-w-71 max-h-auto
            sm:max-w-74
            md:min-w-90
            lg:min-w-113.5 lg:min-h-62
          "
            >
              <h1>SEE ALL</h1>
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
