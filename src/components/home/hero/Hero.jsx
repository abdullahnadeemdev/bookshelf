import HeroImg from "../../../assets/images/tipo.jpg";
import Button from "../../shared/button/Button";
import { SearchIcon } from "../../../assets/icons";
import { Stamp } from "../../../assets/svgs";

const Hero = () => {
  return (
    <div
      className="
        max-w-[1440px]
        mb-10 px-4
        text-center
      "
    >
      <p
        className="
          py-6
          text-2xl text-grayBg font-semibold text-wrap
          xs:text-4xl
          sm:text-4xl
          md:text-6xl
          lg:text-[83px]
        "
      >
        READING MAKES THE WORLD HUGE
      </p>

      <div
        className="
          flex flex-col
          max-w-[1400px] max-h-[348px] h-auto
          justify-evenly xs:flex-row gap-4
        "
      >
        <div
          className="
            flex-1 overflow-hidden
            p-4
            text-start
            bg-grayBg
            rounded-xl
            relative
          "
        >
          {/* <div className="flex-1 bg-grayBg rounded-xl text-start p-4 w-fit xs:min-w-[200px] sm:min-w-[296px] lg:max-w-3xl relative overflow-hidden"> */}
          <p
            className="
              z-20
              mb-7
              text-wrap text-lg text-center
              xs:mb-10 relative
              sm:mb-3 sm:pr-20 sm:text-start sm:text-2xl
              md:max-w-110 md:mb-3 md:text-3xl
              lg:max-w-140 lg:mb-8 lg:pr-36 lg:text-4xl
              xl:mb-5 xl:pr-66
              2xl:mb-5 2xl:pr-86
            "
          >
            FIND SOMETHING TO READ
          </p>

          <p
            className="
              z-20
              mb-9
              text-wrap text-center text-sm
              xs:text-base xs:mb-15 relative
              sm:mb-0 sm:pr-12 sm:text-start sm:text-sm
              md:max-w-90 md:pr-8 md:text-sm md:mb-0
              lg:max-w-146 lg:pr-48 lg:mb-8
              xl:max-w-150 xl:pr-28 xl:mb-6 xl:text-lg
              2xl:pr-58 2xl:mb-0
            "
          >
            Fancy something unusual and unpredictable? Funny or exciting? No
            problem. Check out the collections we have prepared for you.
          </p>

          <Button
            variant="outline"
            className="
              z-20
              relative left-[28%]
              sm:left-0 sm:-bottom-2
              md:-bottom-16
              2xl:-bottom-20
            "
          >
            BROWSE NOW
          </Button>

          <SearchIcon
            className="
              z-10
              min-h-30 min-w-40 max-h-160 max-w-130 h-full
              absolute -right-17 top-10 rotate-90 stroke-blackC! stroke-1!
              xl:min-h-80 xl:min-w-90 xl:-right-20 xl:top-18
            "
          />
        </div>

        <div
          className="
            flex-1
            relative
          "
        >
          <img
            src={HeroImg}
            alt="bookImage"
            className="
              object-cover
              w-full h-full
              rounded-2xl
            "
          />
          <Stamp
            className="
              h-10 w-10
              absolute top-3 left-3
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
