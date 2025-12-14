import React from "react";
import Button from "../shared/button/Button";

const OrderSummay = () => {
  return (
    <div className="hidden md:block">
      <div className="bg-blackC rounded-2xl p-6 w-100 ">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-normal tracking-wider">ORDER SUMMARY</h2>

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
  );
};

export default OrderSummay;
