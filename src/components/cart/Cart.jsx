import { NavLink, useNavigate } from "react-router";
import Button from "../shared/button/Button";
import CartRow from "./CartRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { id } from "../../utils/utils";

const Cart = () => {
  const cartArray = useSelector((state) => state?.cart?.cartItems) || [];
  const user = useSelector((state) => state?.auth?.user) || "";

  const [grandTotal, setGrandTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(() => {
      return cartArray?.filter((item) => item.email === user);
    });
  }, [cartArray]);

  useEffect(() => {
    const grandTotal = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return acc + price * item.quantity;
    }, 0);
    setGrandTotal(grandTotal);
  }, [cartItems]);

  // console.log("grandTotal", grandTotal);

  const navigate = useNavigate();
  const handleClick = () => {
    if (cartItems.length > 0 && user !== "") {
      navigate("/checkout");
    } else {
      console.log("cart is empty");
    }
  };

  return (
    <div className="text-black h-screen relative">
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
            key={id()}
            id={item.id}
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

      <div className="flex flex-col items-end p-4 mx-4  ">
        <div className="flex gap-10  absolute bottom-27 ">
          <p className="font-bold">TOTAL</p>
          <p className="font-bold text-xl">${grandTotal}</p>
        </div>
        <Button className="mt-4 absolute bottom-10" onClick={handleClick}>
          PROCEED TO CHECKOUT
        </Button>
      </div>
    </div>
  );
};
export default Cart;
