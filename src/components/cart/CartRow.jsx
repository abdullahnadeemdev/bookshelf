import React from "react";
import Anne from "../../assets/images/Anne.png";
import Button from "../shared/button/Button";

const CartRow = (props) => {
  // console.log("props price", props);
  const price = parseFloat(props.price);
  const quantity = props.quantity;
  console.log("word word", props);
  return (
    <div className="p-4 text-black">
      <div className="flex items-center border-b py-4">
        <div className="flex-3">
          <div className="flex gap-4 items-center">
            <img src={props.image} alt="" className="w-20 h-20 object-cover" />
            <div>
              <p className="font-semibold">{props.title}</p>
              <p className="text-gray-500">{props.author}</p>
              <button className="text-red-500 text-sm">Remove</button>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center">{quantity}</div>
        <div className="flex-1 text-right">${price * quantity}</div>
      </div>
    </div>
  );
};

export default CartRow;
