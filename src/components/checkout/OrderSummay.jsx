import React from "react";
import Button from "../shared/button/Button";
import { useLocation } from "react-router";

const OrderSummay = () => {
  const array = JSON.parse(localStorage.getItem("cart"));

  let totalQuantity = array.reduce((acc, item) => acc + item.quantity, 0);

  let totalPrice = array.reduce((acc, item) => {
    const price = parseFloat(item.price.slice(1));
    return acc + price * item.quantity;
  }, 0.0);

  const { state } = useLocation();
  // console.log("state of OrderSummay", state);

  return (
    <div className="hidden md:block">
      <div className="bg-blackC rounded-2xl p-6 w-100 ">
        <div className="justify-between items-center mb-2">
          <h2 className="text-2xl font-normal text-center">ORDER SUMMARY</h2>

          {/* <p className="text-base underline">EDIT</p> */}
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
            {array.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="py-1.5">{item.title}</td>
                  <td className="py-1.5 text-center ">{item.quantity}</td>
                  <td className="py-1.5 text-right ">{item.price}</td>
                </tr>
              );
            })}

            <tr className="text-base">
              <td className="py-1.5 font-semibold">Subtotal</td>
              <td className="py-1.5 text-center ">{totalQuantity}</td>
              <td className="py-1.5 text-right ">${totalPrice}</td>
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
                ${totalPrice}
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
  );
};

export default OrderSummay;
