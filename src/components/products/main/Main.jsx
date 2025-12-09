import FilterBar from "./filterBar";
import SideBar from "./SideBar";
import { ArrayProducts as array } from "../../../utils/utils";
import Card from "./Card";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10">
      <div className="">
        <FilterBar />
      </div>
      <div className="bg-grayBg mt-10 flex gap-2">
        <div className="hidden md:block">
          <SideBar />
        </div>
        <div className="flex justify-around gap-2 md:gap-3 flex-wrap">
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
    </div>
  );
};

export default Main;
