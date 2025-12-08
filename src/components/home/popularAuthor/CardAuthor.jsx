import { Bookmark } from "../../../assets/icons";
import Fyodor from "../../../assets/images/Fyodor-Dostoyevskiy.jpg";

const CardAuthor = (props) => {
  return (
    <>
      {props.author === "SEE ALL" ? (
        <div
          className="
            flex
            w-full h-[20vh]
            text-black
            bg-yellow
            rounded-2xl
            items-center justify-center
            max-w-100
          "
        >
          <h1 className="font-bold md:text-2xl">SEE ALL</h1>
        </div>
      ) : (
        <div
          className="
            flex flex-col
            xs:flex-row
            h-[20vh]
            max-w-[400px]
            text-black
            bg-white
            rounded-2xl
          "
        >
          <div
            className="
            h-10
            xs:h-full
              lg:min-w-10 lg:max-w-40 lg:max-h-49
              flex-4
              sm:flex-3
            "
          >
            <img
              src={props.image}
              alt=""
              className="
                object-cover
                h-full w-full
                rounded-l-2xl
                grayscale-100
              "
            />
          </div>
          <div
            className="
              w-full
              px-2
              flex-5
            "
          >
            <div
              className="
                flex
                mt-2
                justify-between items-center
                mb-3
                xs:mb-8
              "
            >
              <p
                className="
                  w-20
                "
              >
                {props.book}
              </p>
              {props.book ? <Bookmark /> : ""}
            </div>
            <p
              className="
                text-wrap
                sm:text-base
                lg:max-w-30 lg:text-xl
              "
            >
              {props.author}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardAuthor;

/*   <>
      {props.author === "SEE ALL" ? (
        <div
          className="
            flex
            w-full h-[25vh]
            text-black
            bg-yellow
            rounded-2xl
            items-center justify-center
            sm:w-[30vw]
            lg:w-[19vw] lg:h-[20vh]
          "
        >
          <h1 className="font-bold md:text-2xl">SEE ALL</h1>
        </div>
      ) : (
        <div
          className="
            flex flex-col
            h-[25vh]
            text-black
            bg-white
            rounded-2xl
            sm:w-[30vw]
            lg:flex-row lg:w-[19vw] lg:h-[20vh]
          "
        >
          <div
            className="
              min-h-28 max-h-28 min-w-fit w-full
              lg:min-w-10 lg:max-w-40 lg:max-h-49
            "
          >
            <img
              src={props.image}
              alt=""
              className="
                object-cover
                h-full w-full
                rounded-l-2xl
                grayscale-100
              "
            />
          </div>
          <div
            className="
              w-full
              px-2
            "
          >
            <div
              className="
                flex
                mt-2
                justify-between items-center
                md:mb-4
              "
            >
              <p
                className="
                  w-20
                "
              >
                {props.book}
              </p>
              {props.book ? <Bookmark /> : ""}
            </div>
            <p
              className="
                text-wrap
                sm:text-base
                lg:max-w-30 lg:text-xl
              "
            >
              {props.author}
            </p>
          </div>
        </div>
      )}
    </> */
