import { NavLink } from "react-router";
import Button from "../shared/button/Button";
import CartRow from "./cartRow";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const grandTotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="text-black">
      <div className="flex border-b p-4 mx-4 font-bold">
        <div className="flex-3">PRODUCT DETAILS</div>
        <div className="flex-1 text-center">QUANTITY</div>
        <div className="flex-1 text-right">PRICE</div>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartRow
            cartItems={cartItems}
            setCartItems={setCartItems}
            key={item.id}
            image={item.image}
            title={item.title}
            price={parseFloat(item.price.replace("$", ""))}
            author={item.author}
            quantity={item.quantity}
          />
        ))
      ) : (
        <p className="p-10 text-center font-semibold text-2xl text-red">
          Your cart is empty.
        </p>
      )}

      <div className="flex flex-col items-end p-4 mx-4 border-t mt-4">
        <div className="flex gap-10">
          <p className="font-bold">TOTAL</p>
          <p className="font-bold text-xl">${grandTotal}</p>
        </div>
        <NavLink to="/checkout">
          <Button className="mt-4 ">PROCEED TO CHECKOUT</Button>
        </NavLink>
      </div>
    </div>
  );
};
export default Cart;
