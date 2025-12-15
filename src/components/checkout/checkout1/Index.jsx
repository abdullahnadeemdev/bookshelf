import React from "react";
import { DropArrowIcon } from "../../../assets/icons";
import Button from "../../shared/button/Button";
import OrderSummay from "../OrderSummay";
// import ContactInfo from "./ContactInfo";
import CloseCard from "../CloseCard";
// import Shipping from "../checkout2/Shipping";
// import Payment from "../checkout3/Payment";
import { Link, Outlet, useLocation, useParams } from "react-router";

const Index = () => {
  const loc = useLocation();
  const path = loc.pathname;
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

      {/* <ContactInfo /> */}
      {/* {path === "/checkout" ? <ContactInfo /> : <CloseCard />} */}
      <Link to="/checkout/contact">contact</Link>
      <Link to="/checkout/shipping" className="ml-10">
        Ship
      </Link>
      <Link to="/checkout/payment" className="ml-10">
        payment
      </Link>
      <div className="flex justify-between">
        <div className="justify-center">
          <Outlet />
        </div>

        <OrderSummay />
      </div>
    </div>
  );
};

export default Index;

export const ContactInfo = () => {
  return (
    <div className="w-150">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-light">CONTACT INFORMATION</h2>
        <span className="flex gap-1">
          <p className="text-greyText ">Already have an account?</p>
          <p className="">Sign in</p>
        </span>
      </div>

      <input
        type="text"
        name=""
        id=""
        className="border h-13 p-3 my-5 bg-white rounded-2xl w-full text-grayBg"
        placeholder="Name Surname "
      />
      <input
        type="text"
        name=""
        id=""
        className="border h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
        placeholder="Mobile"
      />

      <Button className="mt-5 w-full">CONTINUE TO SHIPPING METHOD</Button>
    </div>
  );
};

export const Shipping = () => {
  return (
    <div className="w-150 mt-5">
      <h2 className="text-2xl font-light">SHIPPING METHOD</h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          name=""
          id=""
          className="border h-13 p-3 my-5 bg-white rounded-2xl w-full text-grayBg"
          placeholder="Today "
        />
        <input
          type="text"
          name=""
          id=""
          className="border h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
          placeholder="Time"
        />
      </div>
      <input
        type="text"
        name="address"
        id="address"
        className="border h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
        placeholder="Address"
      />
      <textarea
        name="note"
        id="note"
        className="border mt-2 p-3 bg-white rounded-2xl w-full text-grayBg"
        placeholder="note"
      ></textarea>

      <Button className="mt-5 w-full">CONTINUE TO PAYMENT</Button>
    </div>
  );
};

export const Payment = () => {
  return (
    <div className="w-150 mt-5">
      <h2 className="text-2xl font-light">PAYMENT</h2>

      <input
        type="text"
        name="address"
        id="address"
        className="border mt-2 h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
        placeholder="Address"
      />
      <div className="flex items-center gap-4">
        <input
          type="text"
          name=""
          id=""
          className="border h-13 p-3 my-5 bg-white rounded-2xl w-full text-grayBg"
          placeholder="Today "
        />
        <input
          type="text"
          name=""
          id=""
          className="border h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
          placeholder="Time"
        />
      </div>

      <Button className="mt-5 w-full">CONTINUE TO PAYMENT</Button>
    </div>
  );
};

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
