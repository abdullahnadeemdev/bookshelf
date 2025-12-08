import { Logo } from "../../../assets/icons";
import { CartIcon } from "../../../assets/icons";
import { SearchIcon } from "../../../assets/icons";
import { BookmarkIcon } from "../../../assets/icons";
import { MenuIcon } from "../../../assets/icons";
import Button from "../button/Button";
import { useState } from "react";
import { menuArr } from "../../../utils/utils";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="w-full max-w-[1440px] px-4 z-50 ">
      <div className="bg-grayBg rounded-2xl w-full p-6 hidden md:block">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <Logo className="h-7 w-8 lg:h-9 lg:w-10" />
            <p className="font-semibold text-lg lg:text-2xl xl:text-3xl">
              BOOKSHELF
            </p>
          </div>

          <ul className="list-none flex gap-2.5 text-xs sm:text-sm lg:text-base lg:gap-3 xl:gap-5 xl:text-lg ">
            {menuArr.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex items-center ">
            <ul className="flex gap-0.5 lg:gap-2 xl:gap-5 mr-3">
              <li>
                <SearchIcon className="h-4 w-4 lg:h-5.5 lg:w-5.5" />
              </li>
              <li>
                <BookmarkIcon className=" h-3.5 w-3.5 lg:h-5 lg:w-5" />
              </li>
              <li>
                <CartIcon className=" h-3.5 w-3.5 lg:h-5 lg:w-5" />
              </li>
            </ul>
            <div>
              <Button className="ml:2 lg:ml-4">LOGIN</Button>
            </div>
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
