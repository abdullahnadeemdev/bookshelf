import { NavLink, useLocation, useNavigate } from "react-router";
import {
  Bookmark,
  RightArrowIcon,
  Star,
  ArrowIcon,
} from "../../../assets/icons";
import Button from "../../shared/button/Button";
import { id } from "../../../utils/utils";
import { useState } from "react";

const Description = (props) => {
  const cartArray = props.item;

  // console.log("cartArray", cartArray);

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const { state } = useLocation();

  const getLogin = () => {
    const user = JSON.parse(localStorage.getItem("logIn")) || {};
    return user?.email || "";
  };
  const em = getLogin();

  const isAuth = props.data;

  if (!state) {
    return (
      <div className="p-8 text-white">
        <p>Product data lost. Please go back and select a book again.</p>
      </div>
    );
  }

  const [num, setNum] = useState(1);

  const productInfo = {
    id: id(),
    title: state.title,
    author: state.author,
    price: state.salePrice,
    quantity: num,
    image: state.img,
  };

  let product = [];

  const checkP = () => {
    cartArray.length > 0
      ? product.push(cartArray.find((item) => item.title === productInfo.title))
      : product;
  };

  function sub() {
    setNum((num) => (num > 1 ? num - 1 : num));
  }
  function add() {
    setNum((num) => num + 1);
  }

  // console.log(
  //   "cartArray.find((item) => item.title === productInfo.title",
  //   cartArray.find((item) => item.title === productInfo.title)
  // );
  checkP();
  // console.log("product", product[0].quantity);

  const [isBookmarked, setIsBookmarked] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    return saved.some((b) => b.title === state.title && b.email === em);
  });

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (!isBookmarked) {
      const updated = [...currentBookmarks, { ...productInfo, email: em }];
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(true);
    } else {
      const updated = currentBookmarks.filter((b) => b.title !== state.title);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(false);
    }
  };

  const navigate = useNavigate();

  const handleCart = () => {
    const isDuplicate = cartItems?.some((item) => item.title === state.title);
    let updatedCart;

    if (isDuplicate) {
      updatedCart = cartItems.map((item) =>
        item.title === state.title
          ? { ...item, quantity: num, email: em }
          : item
      );
      setCartItems(updatedCart);
      props.cartItemsInfo(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Updated cart!");
    } else {
      updatedCart = [...cartItems, { ...productInfo, email: em }];
      setCartItems(updatedCart);
      props.cartItemsInfo(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Added to cart!");
    }
  };

  const handleSub = () => {
    sub();
    // handleCart();
  };

  const handleAdd = () => {
    add();
    // handleCart();
  };

  return (
    <div className="p-8 bg-grayBg rounded-[20px]">
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
              alt={state.title}
              className="h-full w-full object-cover rounded-[20px]"
            />
            <Bookmark
              fill={isBookmarked ? "white" : "#2a2c2e"}
              classname="absolute top-3 right-3"
              onClick={handleBookmark}
            />
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

            <div className="hidden sm:flex gap-5 list-none">
              <span className="font-semibold my-5">
                <li className="mt-1">Category</li>
                <li className="mt-1">Publish date</li>
                <li className="mt-1">Language</li>
                <li className="mt-1">Pages</li>
                <li className="mt-1">Cover</li>
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

            <span className="flex gap-4 my-5 font-semibold text-3xl sm:text-4xl">
              <p className="text-greyText line-through">{state.price}</p>
              <p>{state.salePrice}</p>
            </span>

            <div className="flex items-center">
              <NavLink
                to="/checkout"
                className="min-w-29 xs:mt-2 text-white p-2 lg:p-4 h-fit rounded-xl md:mt-4"
                state={{
                  img: state.image,
                  author: state.author,
                  title: state.title,
                  comments: state.comts,
                  star: state.star,
                  people: state.people,
                  price: state.price,
                  salePrice: state.saleP,
                  type: state.type,
                  publishDate: state.publishDate,
                  language: state.lang,
                  pages: state.pages,
                  readTime: state.readTime,
                  cover: state.cover,
                  publisher: state.publisher,
                }}
              >
                <Button className="mr-2 min-w-39">BUY NOW</Button>
              </NavLink>

              {product.length > 0 ? (
                <button className="min-w-39 xs:mt-4 items-center justify-evenly flex h-14 text-black bg-whiteBg rounded-[20px]">
                  <p
                    className="flex items-center justify-center hover:bg-blackC"
                    onClick={handleSub()}
                  >
                    -
                  </p>
                  <p className="bg-yellow h-14 w-10 flex items-center justify-center">
                    {num}
                  </p>
                  <p
                    className="flex items-center justify-center hover:bg-blackC"
                    onClick={handleAdd()}
                  >
                    +
                  </p>
                </button>
              ) : (
                <Button
                  variant="outline"
                  className="max-w-39 max-h-14 xs:mt-3  text-white"
                  onClick={handleCart}
                >
                  ADD TO CART
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-[20px] hidden lg:block">
          <div className="bg-whiteBg text-black font-light rounded-[20px] p-6 mb-3">
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
          </div>

          <div className="bg-whiteBg text-black font-light rounded-[20px] p-5 w-full ">
            <span className="flex justify-between items-center">
              <p className="text-xl font-normal">Novel</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
