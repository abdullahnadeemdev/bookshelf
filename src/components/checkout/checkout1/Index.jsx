import React from "react";
import { DropArrowIcon } from "../../../assets/icons";
import Button from "../../shared/button/Button";

const Index = () => {
  return (
    <div className="p-8 text-white rounded-2xl  max-w-[1440px] bg-grayBg">
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

        <div>
          <div className="bg-blackC rounded-2xl p-6 w-100">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-normal tracking-wider">
                ORDER SUMMARY
              </h2>

              <p className="text-base underline">EDIT</p>
            </div>

            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="text-left font-normal ">
                  <th className="py-1.5">BOOKS</th>
                  <th className="py-1.5 text-center">QTY</th>
                  <th className="py-1.5 text-right">PRICE</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-1.5">Hello I am Erik</td>
                  <td className="py-1.5 text-center ">1</td>
                  <td className="py-1.5 text-right ">$10.5</td>
                </tr>

                <tr>
                  <td className="py-1.5">Muscle</td>
                  <td className="py-1.5 text-center ">1</td>
                  <td className="py-1.5 text-right ">$22.5</td>
                </tr>

                <tr className="text-base">
                  <td className="py-1.5 font-semibold">Subtotal</td>
                  <td className="py-1.5 text-center ">2</td>
                  <td className="py-1.5 text-right ">$33.0</td>
                </tr>

                <tr>
                  <td className="py-1.5 font-semibold">Shipping</td>
                  <td className="py-1.5"></td>
                  <td className="py-1.5 text-right">FREE</td>
                </tr>

                <tr>
                  <td className="pt-2 pb-2 text-xl  font-medium">TOTAL</td>
                  <td className="pt-2 pb-2"></td>
                  <td className="pt-2 pb-2 text-xl text-right font-medium">
                    $33.0
                  </td>
                </tr>
              </tbody>
            </table>
            <span></span>
          </div>
          <span>
            <input
              type="text"
              className="border rounded-2xl text-lightGrayBg p-4 bg-white h-13 mt-5 w-[75%] mr-2"
              placeholder="Promocode"
            />
            <Button className="font-bold!  bg-darkGreyText!">Apply</Button>
          </span>
        </div>
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
