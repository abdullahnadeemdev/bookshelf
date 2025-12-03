import BestSellers from "../../components/home/bestSellers/BestSellers";
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
    </div>
  );
};

export default Index;
