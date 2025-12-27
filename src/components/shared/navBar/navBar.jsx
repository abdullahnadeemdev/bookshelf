import { Logo } from "../../../assets/icons";
import { CartIcon } from "../../../assets/icons";
import { SearchIcon } from "../../../assets/icons";
import { BookmarkIcon } from "../../../assets/icons";
import { MenuIcon } from "../../../assets/icons";
import Button from "../button/Button";
import { useState } from "react";
import { menuArr } from "../../../utils/utils";
import { NavLink } from "react-router";
import { Link } from "react-scroll";

const NavBar = (props) => {
  const isAuth = props.data;
  const getLogin = () => {
    const arr = JSON.parse(localStorage.getItem("logIn")) || "";
    return arr?.email;
  };
  const em = getLogin();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  // console.log("props", props.item);
  let num = props.item.filter((item) => item.email === em).length;

  return (
    <div className="w-full max-w-[1440px] px-4 z-50 md:sticky top-0">
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

            <NavLink
              to="/authorsPopular"
              className={({ isActive }) =>
                isActive ? "text-yellow" : "text-whiteBg"
              }
            >
              Authors
            </NavLink>

            <NavLink
              to="/bookmark"
              className={({ isActive }) =>
                isActive ? "text-yellow" : "text-whiteBg"
              }
            >
              What to Read?
            </NavLink>

            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "text-yellow" : "text-whiteBg"
              }
            >
              Gift Ideas
            </NavLink>

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
                    <p className="absolute pb-7 font-bold text-xs sm:text-sm sm:h-3 sm:w-3 lg:text-xl lg:w-6 lg:h-6 -top-2 right-1 bg-red rounded-full text-center">
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
          className={`absolute top-7 sm:top-11 mx-2 bg-black mt-2 rounded-lg ${
            click ? "border border-grey " : ""
          } w-[96%]`}
        >
          {click ? (
            <ul className="mx-2">
              <NavLink
                to="/books"
                className="w-full block font-semibold bg-black text-yellow hover:bg-yellow rounded-2xl mt-1 hover:text-black px-3 py-4 text-lg transition-all duration-300 cursor-pointer "
              >
                Books
              </NavLink>

              <NavLink
                to="/authorsPopular"
                className="w-full block font-semibold bg-black text-yellow hover:bg-yellow rounded-2xl hover:text-black px-3 py-4 text-lg transition-all duration-300 cursor-pointer "
              >
                Authors
              </NavLink>

              <NavLink
                to="/bookmark"
                className="w-full block font-semibold bg-black text-yellow hover:bg-yellow rounded-2xl hover:text-black px-3 py-4 text-lg transition-all duration-300 cursor-pointer "
              >
                What to Read?
              </NavLink>

              <NavLink
                to="/books"
                className="w-full block font-semibold bg-black text-yellow hover:bg-yellow rounded-2xl hover:text-black px-3 py-4 text-lg transition-all duration-300 cursor-pointer "
              >
                Gift Ideas
              </NavLink>

              <NavLink className="w-full block font-semibold mb-1 bg-black text-yellow hover:bg-yellow hover:text-black px-3 py-4 text-lg transition-all duration-300 cursor-pointer ">
                About Us
              </NavLink>
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
