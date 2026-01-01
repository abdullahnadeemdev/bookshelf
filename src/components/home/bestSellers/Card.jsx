import { useState } from "react";
import { Bookmark, Comment, Star } from "../../../assets/icons";
import { NavLink } from "react-router";
const Card = (props) => {
  const isAuth = props.data;
  const getLogin = () => {
    const user = JSON.parse(localStorage.getItem("logIn")) || {};
    return user?.email || "";
  };

  const em = getLogin();

  const [isBookmarked, setIsBookmarked] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    return saved.some((b) => b.title === props.title && b.email === em);
  });

  // console.log("isBookmarked", isBookmarked);

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (!isBookmarked) {
      const updated = [...currentBookmarks, { ...props, email: em }];
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(true);
    } else {
      const updated = currentBookmarks.filter((b) => b.title !== props.title);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(false);
    }
  };

  return (
    <NavLink
      to={`/books/${props.title}`}
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
      {props.title === "SEE ALL" ? (
        <div
          className="
            flex
            flex-1
            text-black
            bg-yellow
            rounded-[20px]
            items-center justify-center
            sm:text-4xl
            min-w-72 min-h-48 max-w-104 max-h-auto
            sm:max-w-74
            md:min-w-90
            lg:min-w-113.5 lg:min-h-70
          "
        >
          <h1>SEE ALL</h1>
        </div>
      ) : (
        <div
          className="
            flex
            flex-1
            p-4
            bg-white
            rounded-[20px]
            xs:max-w-104 gap-3
            sm:max-w-74
            md:min-w-90
            lg:min-w-113.5
          "
        >
          <div
            className="
              overflow-hidden
              h-40 w-25
              rounded-[20px]
              md:h-50 md:w-35
              lg:h-59 lg:w-60
            "
          >
            <img
              src={props.image}
              alt="AfterDark book"
              className="
                object-cover
                h-full w-full
              "
            />
          </div>
          <div
            className="
              text-black
            "
          >
            <div
              className="
                flex
                justify-between
                md:w-45 md:mb-4
                lg:w-60 lg:mb-6
             
              "
            >
              <span
                className="
                  pr-2
                "
              >
                <p
                  className="
                    text-sm
                    md:text-base
                  "
                >
                  {props.author}
                </p>
                <p
                  className="
                    overflow-hidden
                    w-26 h-7
                    mb-1
                    font-semibold text-wrap text-xs
                    sm:max-w-46
                    md:text-base
                    lg:overflow-visible lg:h-10
                  "
                >
                  {props.title}
                </p>
              </span>
              <div onClick={(e) => handleBookmark(e)}>
                <Bookmark fill={isAuth && isBookmarked ? "white" : "#2a2c2e"} />
              </div>
            </div>

            <span
              className="
                flex
                w-fit
                mt-2 px-1.5 mb-2
                text-sm
                border rounded-full
                items-center gap-1
                md:mt-0 md:p-1 md:px-3 md:text-base
              "
            >
              <p>{props.comts}</p>
              <Comment />
            </span>

            <span
              className="
                flex
                w-fit
                mb-4 px-1
                text-sm
                border rounded-full
                items-center gap-1
                md:p-1 md:px-3 md:mb-6 md:text-base
                lg:mb-8
              "
            >
              <p>{props.star}</p>
              <Star />
              <p>({props.people})</p>
            </span>

            <span
              className="
                flex
                gap-1
              "
            >
              <p
                className="
                  text-greyText text-lg
                  line-through
                "
              >
                {props.price}
              </p>
              <p
                className="
                  text-lg
                "
              >
                {props.saleP}
              </p>
            </span>
          </div>
        </div>
      )}
    </NavLink>
  );
};

export default Card;
