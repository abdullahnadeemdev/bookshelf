import React from "react";
import { ArrayBestSellers } from "../../utils/utils";

import CartRow from "./cartRow";

// console.log("I work", ArrayBestSellers);

const Cart = () => {
  return (
    <div className="text-black">
      <p>hello</p>
      <div className="flex border-b p-4 mx-4 font-bold">
        <div className="flex-3">PRODUCT DETAILS</div>
        <div className="flex-1 text-center">QUANTITY</div>
        <div className="flex-1 text-right">PRICE</div>
      </div>
      {ArrayBestSellers.map((item) => (
        <CartRow
          image={item.image}
          title={item.title}
          price={item.saleP}
          author={item.author}
        />
      ))}
      <p>hello</p>
    </div>
  );
};

export default Cart;
