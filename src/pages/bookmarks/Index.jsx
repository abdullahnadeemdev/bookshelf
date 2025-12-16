import Card from "./Card";
import { ArrayBestSellers as array } from "../../utils/utils";

const Index = () => {
  return (
    <div className="h-fit  mb-10 2xl:h-screen max-w-[1440px] px-4 bg-blackC">
      <h1 className="font-semibold text-4xl py-10">Favourite Books</h1>
      <div className="flex justify-evenly gap-3 flex-wrap">
        {array.map((item, index) => (
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
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
