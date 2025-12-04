import { ArrowIcon } from "../../../assets/icons/ArrowIcon";

const CallToAction = () => {
  return (
    <div className="bg-grayBg rounded-2xl sm:max-h-60 p-6 flex flex-col sm:flex-row justify-between">
      <div className="flex flex-col gap-8 ">
        <h1 className="text-xl md:text-2xl lg:text-4xl">
          DECIDING WHAT TO READ NEXT?
        </h1>
        <p className="md:text-lg lg:text-xl text-wrap min-w-20 max-w-130 mb-4 sm:mb-10">
          You're in the right place. Tell us what titles or genres you've
          enjoyed in the past, and we'll give you surprisingly insightful
          recommendations.
        </p>
      </div>
      <div className="bg-yellow w-fit flex items-center justify-center rounded-2xl ">
        <ArrowIcon classname="w-10 h-10 sm:h-20 sm:w-30 md:h-30 md:w-40 lg:h-45 lg:w-45" />
      </div>
    </div>
  );
};

export default CallToAction;
