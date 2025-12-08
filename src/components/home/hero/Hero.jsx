import HeroImg from "../../../assets/images/tipo.jpg";
import Button from "../../shared/button/Button";
import { SearchIcon } from "../../../assets/icons";
import { Stamp } from "../../../assets/icons";

const Hero = () => {
  return (
    <div
      className="
      min-w-[320px]
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
        // grid
        //   grid-cols-[minmax(24px, 100px)]
      >
        READING MAKES THE WORLD HUGE
      </p>

      <div
        className="
          flex flex-col
          sm:max-w-[1400px] max-w-auto max-h-auto sm:max-h-[348px] h-auto
          justify-evenly sm:flex-row gap-4
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
          <div className="relative z-20 min-w-65 flex flex-col justify-between h-full gap-[31px] xs:gap-0">
            <p className="text-wrap text-lg xl:text-4xl xl:max-w-80 lg:text-2xl lg:max-w-50 md:max-w-40">
              FIND SOMETHING TO READ
            </p>

            <p className="text-wrap  text-sm xl:text-lg xl:max-w-90 lg:text-base lg:max-w-66 md:max-w-55">
              Fancy something unusual and unpredictable? Funny or exciting? No
              problem. Check out the collections we have prepared for you.
            </p>

            <Button variant="outline" className="">
              BROWSE NOW
            </Button>
          </div>

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
          className=" xs:w-[80%]
          sm:max-h-full sm:w-auto
          max-h-[225px] overflow-hidden
            flex-1
            relative"
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
