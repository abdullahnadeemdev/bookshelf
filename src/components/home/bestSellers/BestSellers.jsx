import Card from "../../container/CardContainerBestSellers";
import { ArrayProducts as array } from "../../../utils/utils";
import { useNavigate } from "react-router";

const BestSellers = () => {
  const newArr = array.slice(3);
  const navigate = useNavigate();
  const handLeClick = () => {
    navigate("/books");
  };
  return (
    <div className="h-fit  mb-10 2xl:h-screen max-w-[1440px] px-4">
      <h1 className="font-semibold text-4xl py-10">BESTSELLERS</h1>
      <div className="flex justify-evenly gap-3 flex-wrap">
        {newArr.map((item, index) =>
          index === 6 ? (
            <div
              key={index}
              onClick={handLeClick}
              className="
            flex
            flex-1
            text-black
            bg-yellow
            rounded-2xl
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
