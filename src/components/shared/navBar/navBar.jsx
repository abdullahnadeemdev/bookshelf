import { Logo } from "../../../assets/icons";
import { CartIcon } from "../../../assets/icons";
import { SearchIcon } from "../../../assets/icons";
import { BookmarkIcon } from "../../../assets/icons";
import { MenuIcon } from "../../../assets/icons";
import Button from "../button/Button";
import { useState } from "react";
import { menuArr } from "../../../utils/utils";
import { NavLink, useLocation, useNavigate } from "react-router";
import { Link } from "react-scroll";

const NavBar = (props) => {
  console.log("porps Navbar", props.data);
  const isAuth = props.data;
  // const location = useLocation().pathname;
  // const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  // const handleNav = () => {
  //   if (location !== "/books") {
  //     navigate("/books");
  //     scrollTo("/authors");
  //   }
  // };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let num = cart?.length;

  return (
    <div className="w-full max-w-[1440px] px-4 z-50 sticky top-0">
      <div className="bg-grayBg rounded-2xl w-full p-6 hidden md:block">
        <div className=" flex items-center justify-between">
          <NavLink to="/">
            <div className="flex items-center gap-2 ">
              <Logo className="h-7 w-8 lg:h-9 lg:w-10" />
              <p className="font-semibold text-lg lg:text-2xl xl:text-3xl">
                BOOKSHELF
              </p>
            </div>
          </NavLink>

          <ul className="list-none flex gap-2.5 text-xs sm:text-sm lg:text-base lg:gap-3 xl:gap-5 xl:text-lg cursor-pointer">
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "text-yellow" : "text-whiteBg"
              }
            >
              Books
            </NavLink>

            <Link
              to="authors"
              smooth={true}
              duration={1000}
              // onClick={handleNav}
            >
              Authors
            </Link>

            <Link to="bestSellers" smooth={true} duration={1000}>
              What to Read?
            </Link>

            <Link to="recommend" smooth={true} duration={1000}>
              Gift Ideas
            </Link>

            <Link>About Us</Link>
          </ul>

          <div className="flex items-center relative">
            <ul className="flex gap-0.5 lg:gap-2 xl:gap-5 mr-3">
              <li>
                <SearchIcon className="h-4 w-4 lg:h-5.5 lg:w-5.5" />
              </li>
              <NavLink to="/bookmark">
                <BookmarkIcon className=" h-3.5 w-3.5 lg:h-5 lg:w-5" />
              </NavLink>
              <li>
                <NavLink to="/cart">
                  {isAuth ? (
                    <p className="absolute font-bold w-6 h-6 top-0 right-28 bg-red rounded-full text-center">
                      {num}
                    </p>
                  ) : (
                    ""
                  )}

                  <CartIcon className=" h-3.5 w-3.5 lg:h-5 lg:w-5" />
                </NavLink>
              </li>
            </ul>
            {!isAuth ? (
              <div>
                <NavLink to="/login">
                  <Button className="ml:2 lg:ml-4">LOGIN</Button>
                </NavLink>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="max-w-9/12 md:hidden">
        <div className="flex items-center gap-3 pl-px lg:pl-5 xl:pl-0 sm:gap-3 text-white">
          <span className="flex items-center">
            <button
              className="px-4 py-2 rounded-sm lg:hidden "
              onClick={handleClick}
            >
              <MenuIcon height={14} width={14} />
            </button>
          </span>
        </div>
        <div
          className={`absolute top-7 sm:top-11 bg-black mt-5 rounded-lg ${
            click ? "border border-grey " : ""
          } w-[96%]`}
        >
          {click ? (
            <ul className="font-semibold w-fit">
              {menuArr.map((e, index) => (
                <li
                  key={index}
                  className="px-4 py-3 text-lg rounded-sm hover:cursor-pointer hover:text-purple hover:bg-grey"
                >
                  {e}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
