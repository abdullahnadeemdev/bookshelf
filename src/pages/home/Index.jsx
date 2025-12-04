import BestSellers from "../../components/home/bestSellers/BestSellers";
import CallToAction from "../../components/home/callToAction/CallToAction";
import Hero from "../../components/home/hero/Hero";

const Index = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center ">
        <Hero /> {/* add min max to h1 */}
      </div>
      <div className="flex items-center justify-center bg-blackC">
        <BestSellers />
      </div>
      <div className="p-6">
        <CallToAction />
      </div>
    </div>
  );
};

export default Index;
