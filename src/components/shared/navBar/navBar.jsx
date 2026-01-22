import { Logo, UserIcon } from "../../../assets/icons/Index.js";
import { CartIcon } from "../../../assets/icons/Index.js";
import { SearchIcon } from "../../../assets/icons/Index.js";
import { BookmarkIcon } from "../../../assets/icons/Index.js";
import { MenuIcon } from "../../../assets/icons/Index.js";
import Button from "../button/Button";
import { useState } from "react";
import { menuArr } from "../../../utils/utils.js";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state?.auth?.user) || "";
  const cart = useSelector((state) => state?.cart?.cartItems) || [];
  const books = useSelector((state) => state?.book?.items) || [];

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const userCart = cart.filter((item) => item.email === user.email);
  const userBookmark = books.filter((item) => item.email === user.email);

  let num = userCart.length;
  let bookmark = userBookmark.length;

  return (
    <div className="w-full max-w-[1440px] px-4  z-50 md:sticky top-3">
      <div className="bg-grayBg rounded-[20px] max-w-[1404px] ml-px w-full p-6 hidden md:block">
        <div className=" flex items-center justify-between">
          <NavLink to="/">
            <div className="flex items-center gap-2 ">
              <Logo className="h-7 w-8 lg:h-9 lg:w-10" />
              <p className="font-semibold text-base lg:text-lg xl:text-xl">
                BIG BOOKSHELF
              </p>
            </div>
          </NavLink>

          <ul className="list-none flex gap-5 text-xs lg:text-sm lg:gap-6 xl:gap-8 xl:text-base font-extralight cursor-pointer">
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "text-yellow" : "text-whiteBg"
              }
            >
              Books
            </NavLink>

            <NavLink
              to="/authors-popular"
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

            <NavLink to="/books">Gift Ideas</NavLink>
          </ul>

          <div className="flex items-center relative ">
            <ul className="flex gap-0.5 lg:gap-2 xl:gap-5 mr-3 ">
              <SearchIcon className=" h-3.5 w-3.5  lg:h-6.5! lg:w-6! stroke-white!" />
              <NavLink to="/bookmark">
                {bookmark !== 0 ? (
                  <div className="absolute flex items-center justify-center bg-yellow rounded-full w-3 h-3 lg:h-5 lg:w-5 top-3 right-24 lg:top-1 lg:right-36 xl:right-38 text-black">
                    <p className="text-[8px] lg:text-sm font-medium">
                      {bookmark}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <BookmarkIcon className=" h-3.5 w-3.5 mt-0.5 lg:h-5.5! lg:w-5! " />
              </NavLink>
              <li>
                <NavLink to="/cart">
                  {num === 0 ? (
                    ""
                  ) : (
                    <div className="flex justify-center items-center absolute top-3 left-9 lg:left-18 lg:top-1 xl:left-24 xl:top-1  bg-yellow w-3 h-3 lg:h-5 lg:w-5 rounded-full ">
                      <p className="text-black font-medium text-[8px] lg:text-sm">
                        {num}
                      </p>
                    </div>
                  )}

                  <CartIcon className=" h-3.5 w-3.5 lg:h-6! lg:w-6!" />
                </NavLink>
              </li>
            </ul>
            {!user ? (
              <div>
                <NavLink to="/login">
                  <Button className="ml:2 lg:ml-3 ">LOGIN</Button>
                </NavLink>
              </div>
            ) : (
              <NavLink to="/user-page">
                <Button className="ml:2 lg:ml-4">USER</Button>
              </NavLink>
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
          className={`absolute top-7 left-0 sm:top-11 mx-2 bg-black mt-2 rounded-lg ${
            click ? "border border-grey " : ""
          } w-[96%]`}
        >
          {click ? (
            <ul className="mx-2">
              <NavLink
                to="/books"
                className="w-full block font-semibold bg-black text-yellow hover:bg-yellow rounded-[20px] mt-1 hover:text-black px-3 py-4 text-lg transition-all duration-300 cursor-pointer "
              >
                Books
              </NavLink>

              <NavLink
                to="/authors-popular"
                className="w-full block font-semibold bg-black text-yellow hover:bg-yellow rounded-[20px] hover:text-black px-3 py-4 text-lg transition-all duration-300 cursor-pointer "
              >
                Authors
              </NavLink>

              <NavLink
                to="/bookmark"
                className="w-full block font-semibold bg-black text-yellow hover:bg-yellow rounded-[20px] hover:text-black px-3 py-4 text-lg transition-all duration-300 cursor-pointer "
              >
                What to Read?
              </NavLink>

              <NavLink
                to="/books"
                className="w-full block font-semibold bg-black text-yellow hover:bg-yellow rounded-[20px] hover:text-black px-3 py-4 text-lg transition-all duration-300 cursor-pointer "
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
