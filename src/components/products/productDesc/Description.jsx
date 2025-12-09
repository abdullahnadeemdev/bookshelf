import { Bookmark, Star } from "../../../assets/icons";
import Muscle from "../../../assets/images/Muscle.png";
import Button from "../../shared/button/Button";

const Description = () => {
  return (
    <div className="p-4">
      <span className="flex gap-1 mb-5">
        <p>Home | Books | All Books |</p>
        <p>Muscle, Alan Trotter</p>
      </span>

      <div>
        <div className="flex gap-5">
          <div className="w-80 h-125 relative">
            <img
              src={Muscle}
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />
            <Bookmark classname="absolute top-3 right-3" />
          </div>

          <div>
            <p className="text-xl font-light">Alan Trotter</p>
            <p className="text-3xl font-semibold my-5">MUSCLE</p>

            <div className="flex gap-5 items-center">
              <span className="flex gap-1 items-center text-lg">
                <Star />
                <p>4.5 (100)</p>
              </span>
              <p className=" underline">4 reviews</p>
            </div>

            <div className="flex gap-5 list-none">
              <span className="font-semibold my-5">
                <li className="mt-1">Category</li>
                <li className="mt-1">Publish date</li>
                <li className="mt-1">Language</li>
                <li className="mt-1">Pages</li>
                <li className="mt-1">Read time</li>
                <li className="mt-1">Type</li>
                <li className="mt-1">Publisher</li>
              </span>

              <span className="my-5 font-light">
                <li className="mt-1">Novel</li>
                <li className="mt-1">May 2007</li>
                <li className="mt-1">English</li>
                <li className="mt-1">208</li>
                <li className="mt-1">4-6 hours</li>
                <li className="mt-1">Hardcover</li>
                <li className="mt-1">Harvil Secker</li>
              </span>
            </div>

            <span className="flex gap-4 my-5 font-semibold text-4xl">
              <p className="text-greyText">$12.50</p>
              <p>$10.50</p>
            </span>

            <div className="">
              <Button className="mr-2">BUY NOW</Button>
              <Button variant="outline">ADD TO BAG</Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Description;
