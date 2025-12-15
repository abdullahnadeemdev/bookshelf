import React from "react";
import { DropArrowIcon } from "../../../assets/icons";
import Button from "../../shared/button/Button";
import OrderSummay from "../OrderSummay";
import ContactInfo from "./ContactInfo";
import CloseCard from "../CloseCard";
import Shipping from "../checkout2/Shipping";
import Payment from "../checkout3/Payment";
import { useLocation, useParams } from "react-router";

const Index = () => {
  const loc = useLocation();
  console.log("loc", loc.pathname);
  return (
    <div className="p-8 text-white rounded-2xl  max-w-[1440px] bg-grayBg m-5">
      <div className="flex gap-2 items-center font-light mb-10">
        <span className="flex gap-2 items-center">
          <DropArrowIcon classname="rotate-90 md:h-5 md:w-5 fill-white" />
          <p>BACK |</p>
          <p>CONTACT INFORMATION</p>
          <DropArrowIcon classname="rotate-270 md:h-5 stroke-1 md:w-5 fill-white" />
        </span>

        <span className="flex gap-2 items-center">
          SHIPPING METHOD
          <DropArrowIcon classname="rotate-270 md:h-5 stroke-1 md:w-5 fill-white" />
        </span>

        <span className="flex gap-2 items-center">
          PAYMENT
          <DropArrowIcon classname="rotate-270 md:h-5 stroke-1 md:w-5 fill-white" />
        </span>
      </div>

      <div className="flex justify-between">
        <div className="justify-center">
          {/* <CloseCard /> */}
          <ContactInfo />
          {/* <Shipping /> */}
          {/* <Payment /> */}
        </div>

        <OrderSummay />
      </div>
    </div>
  );
};

export default Index;

// <div className="bg-blackC rounded-2xl p-6 w-90">
//   <span className="flex my-3 justify-between items-center">
//     <p className="font-light text-2xl">ORDER SUMMARY</p>
//     <p className="underline text-xl">EDIT</p>
//   </span>

//   <span className="flex my-2 justify-between items-center flex-1">
//     <p className="font-medium">BOOKS</p>
//     <p>QTY</p>
//     <p>PRICE</p>
//   </span>

//   <span className="flex my-2 justify-between items-center flex-1">
//     <p>Hello I am Erik</p>
//     <p>1</p>
//     <p>$10.5</p>
//   </span>

//   <span className="flex my-2 justify-between items-center flex-1">
//     <p>Muscle</p>
//     <p>1</p>
//     <p>$22.5</p>
//   </span>

//   <span className="flex my-2 justify-between items-center flex-1">
//     <p>Subtotal</p>
//     <p>2</p>
//     <p>$33</p>
//   </span>

//   <span className="flex my-2 justify-between items-center">
//     <p>Shipping</p>
//     <p>FREE</p>
//   </span>

//   <span className="flex my-2 justify-between items-center">
//     <p>TOTAL</p>
//     <p>$33</p>
//   </span>

//   <span className="flex my-2 justify-between items-center">
//     <input type="text" />
//     <Button>APPLY</Button>
//   </span>
// </div>
