import { authorsArray } from "../../../utils/utils";
import CardAuthor from "./CardAuthor";
const PopularAuthor = () => {
  return (
    <div className="h-fit bg-blackC mb-10 2xl:h-screen max-w-[1440px] px-4">
      <h1 className="font-semibold text-4xl py-10 pl-6">POPULAR AUTHORS</h1>
      <div className="flex justify-evenly gap-3 flex-wrap">
        {authorsArray.map((item, index) => (
          <CardAuthor
            key={index}
            image={item.image}
            author={item.author}
            book={item.book}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularAuthor;
