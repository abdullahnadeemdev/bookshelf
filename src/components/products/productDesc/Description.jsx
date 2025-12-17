import { useLocation, useParams } from "react-router";
import {
  ArrowIcon,
  Bookmark,
  RightArrowIcon,
  Star,
} from "../../../assets/icons";
import Button from "../../shared/button/Button";

const Description = () => {
  const { state } = useLocation();
  // console.log("props", props.cartData);
  // console.log("props number", props.cartData.length);
  // console.log("state", state.author);
  // const params = useParams();
  // console.log("param", params);

  return (
    <div className="p-8 bg-grayBg rounded-2xl">
      <span className="flex gap-1 mb-5">
        <p>Home | Books | All Books |</p>
        <p className="text-greyText">
          {state.title}, {state.author}
        </p>
      </span>

      <div className="flex justify-between ">
        <div className="flex-2 flex flex-col xs:flex-row gap-5">
          <div className="xs:w-60 sm:w-80 sm:h-125 relative">
            <img
              src={state.img}
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />
            <Bookmark classname="absolute top-3 right-3" />
          </div>

          <div>
            <p className="text-xl font-light">{state.author}</p>
            <p className="text-3xl font-semibold my-5">{state.title}</p>

            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <span className="flex gap-1 items-center text-lg">
                <Star />
                <p>
                  {state.star} ({state.people})
                </p>
              </span>
              <p className="underline">{state.comments} reviews</p>
            </div>

            <div className="hidden sm:flex  gap-5 list-none">
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
                <li className="mt-1">{state.type}</li>
                <li className="mt-1">{state.publishDate}</li>
                <li className="mt-1">{state.language}</li>
                <li className="mt-1">{state.pages}</li>
                <li className="mt-1">{state.cover}</li>
                <li className="mt-1">{state.publisher}</li>
              </span>
            </div>

            <span className="flex flex-row xs:flex-col sm:flex-row gap-4 my-5 font-semibold text-3xl sm:text-4xl">
              <p className="text-greyText">{state.price}</p>
              <p>{state.salePrice}</p>
            </span>

            <div className="flex xs:block">
              <Button className="mr-2 min-w-29 ">BUY NOW</Button>
              <Button
                variant="outline"
                className="min-w-29 xs:mt-2 text-white"
                // onClick={() =>
                //   props.addToCartHandler({ price: 100, name: "producttttt" })
                // }
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-2xl hidden lg:block">
          <div className="bg-whiteBg text-black font-light rounded-2xl p-6 mb-3">
            <span className="flex justify-between ">
              <p className="text-xl font-normal">PLOT SUMMARY</p>
              <RightArrowIcon />
            </span>
            <p className="text-wrap my-3 max-h-72 overflow-hidden">
              In a hard-boiled city of crooks, grifts and rackets lurk a pair of
              toughs: Box and _____. They're the kind of men capable of
              extracting apologies and reparations, of teaching you a chilling
              lesson. They seldom think twice, and ask very few questions.Until
              one night over the poker table, they encounter a pulp writer with
              wild ideas and an unscrupulous private detective, leading them
              into what is either a classic mystery, a senseless maze of
              corpses, or an inextricable fever dream . . . Drunk on cinematic
              and literary influence, Muscle is a slice of noir fiction in
              collapse, a ceaselessly imaginative story of violence, boredom and
              madness.
            </p>
            <p className="underline mt-3 font-normal">READ PREVIEW</p>
          </div>

          <div className="bg-whiteBg text-black font-light rounded-2xl p-5 w-full ">
            <span className="flex justify-between items-center">
              <p className="text-xl font-normal">Reception</p>
              <ArrowIcon classname="h-8 w-10" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
