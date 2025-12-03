import HeroImg from "../../assets/images/tipo.jpg";
import Button from "../shared/button/Button";
import { SearchIcon } from "../../assets/icons";
import { Stamp } from "../../assets/svgs";

const Hero = () => {
  return (
    <div className="text-center mb-10 max-w-[1440px]">
      <p className="py-6 text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-[83px] text-grayBg font-semibold text-wrap ">
        READING MAKES THE WORLD HUGE
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mx-auto">
        <div className="flex-1 bg-grayBg rounded-xl text-start p-4 w-fit max-w-3xl relative overflow-hidden">
          <p className="text-wrap text-lg mb-7 xs:text-2xl xs:mb-10 text-center sm:text-start sm:text-xl sm:mb-3 sm:pr-20 md:text-2xl md:mb-7 md:pr-30 lg:text-3xl lg:mb-7 lg:pr-50 xl:text-4xl xl:pr-80 xl:mb-13 relative z-20">
            FIND SOMETHING TO READ
          </p>
          <p className="text-wrap text-center mb-9 text-sm xs:text-base xs:mb-15 sm:text-start sm:text-xs sm:mb-4 sm:pr-10 md:text-sm md:mb-7 md:pr-18 lg:text-base lg:pr-36 lg:mb-10 xl:text-lg relative xl:mb-34 xl:pr-66 z-20">
            Fancy something unusual and unpredictable? Funny or exciting? No
            problem. Check out the collections we have prepared for you.
          </p>

          <Button
            variant="outline"
            className="relative left-[28%] sm:left-0 z-20 bottom-0"
          >
            BROWSE NOW
          </Button>

          <SearchIcon className="absolute lg:top-3 lg:-right-20 -right-25 top-14 md:h-60! md:w-80! lg:h-90! lg:w-80! xl:h-130! xl:w-110! z-10  rotate-90 stroke-blackC! stroke-1!" />
        </div>

        <div className="rounded-xl relative flex-1">
          <div className="lg:h-80 lg:w-120 xl:w-170 xl:h-110">
            <img
              src={HeroImg}
              alt="bookImage"
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
          <Stamp className="absolute top-3 left-3 h-10 w-10 md:h-12 md:w-12 lg:top-8 lg:left-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
