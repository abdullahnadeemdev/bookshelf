import { NavLink } from "react-router";
import { Bookmark, Comment, Star } from "../../../assets/icons";
import { useState } from "react";

const Card = (props) => {
  const getLogin = () => {
    const user = JSON.parse(localStorage.getItem("logIn")) || {};
    return user?.email || "";
  };
  const em = getLogin();

  const book = {
    image: props.image,
    author: props.author,
    title: props.title,
    comts: props.comts,
    star: props.star,
    people: props.people,
    price: props.price,
    saleP: props.saleP,
    type: props.type,
    publishDate: props.publishDate,
    lang: props.lang,
    pages: props.pages,
    readTime: props.readTime,
    cover: props.cover,
    publisher: props.publisher,
  };

  const [isBookmarked, setIsBookmarked] = useState(() => {
    const array = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const booksArray = array.filter((item) => item.email === em);
    return booksArray.some((b) => b.title === book?.title);
  });

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || []
    );

    if (!isBookmarked) {
      const updated = [...currentBookmarks, props];
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(true);
    } else {
      const updatedArray = currentBookmarks.filter(
        (b) => b.title !== props.title
      );
      localStorage.setItem("bookmarks", JSON.stringify(updatedArray));
      setIsBookmarked(false);
    }
  };
  return (
    <NavLink
      to={`/books/${props.title}`}
      className="bg-whiteBg p-2 lg:p-4 h-fit rounded-xl md:mt-4"
      state={{
        img: props.image,
        author: props.author,
        title: props.title,
        comments: props.comts,
        star: props.star,
        people: props.people,
        price: props.price,
        salePrice: props.saleP,
        type: props.type,
        publishDate: props.publishDate,
        language: props.lang,
        pages: props.pages,
        readTime: props.readTime,
        cover: props.cover,
        publisher: props.publisher,
      }}
    >
      <div className="h-60 w-60 xs:h-40 xs:w-44 sm:h-40 sm:w-45 md:h-40 md:w-41.5 lg:h-[45vh] lg:w-[21vw]  relative">
        <img
          src={props.image}
          className="h-full w-full object-fit lg:object-fit rounded-xl"
          alt=""
        />
        <div onClick={(e) => handleBookmark(e)}>
          <Bookmark
            fill={isBookmarked ? "white" : "#2a2c2e"}
            classname="absolute z-30 top-2 right-2"
            onChange={handleBookmark}
          />
        </div>
      </div>

      <div className="text-black">
        <div
          className="
              flex justify-between"
        >
          <span className="pr-2">
            <p className="text-xs text-darkGreyText md:text-sm mt-2">
              {props.author}
            </p>
          </span>
        </div>

        <div className="flex flex-col justify-between gap-0">
          <p
            className="
                              text-wrap text-xs
                              
                              w-30 h-8
                              md:text-base
                              md:w-40 md:h-12
                              lg:w-50 
                              
                            "
          >
            {props.title}
          </p>
          <div className="flex gap-2 mb-5">
            <span
              className="flex w-fit px-1 text-sm border rounded-full items-center gap-0.5 md:gap-1
                          md:p-1 md:px-3 md:text-base"
            >
              <p>{props.comts}</p>
              <Comment />
            </span>

            <span
              className="flex w-fit px-1 text-sm border rounded-full items-center gap-0.5 md:gap-1
                          md:p-1 md:px-3 md:text-base "
            >
              <p>{props.star}</p>
              <Star />
              <p>{props.people}</p>
            </span>
          </div>

          <span className="flex gap-1">
            <p className="text-greyText md:text-lg line-through">
              {props.price}
            </p>
            <p className="md:text-lg ml-1">{props.saleP}</p>
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
