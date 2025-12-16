import React from "react";
import Button from "../../shared/button/Button";

const Payment = (props) => {
  const handleClick = () => {
    props.fun((prev) => ({ ...prev, shipBtn: false }));
  };
  return (
    <div className="w-150 mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-light">PAYMENT</h2>
        <span className="flex gap-1 items-center">
          <label>
            <input
              type="radio"
              className="bg-blackC mr-1"
              name="deliveryType"
            />
            By card
          </label>
          <label>
            <input
              type="radio"
              className="bg-blackC mr-1"
              name="deliveryType"
            />
            Payment upon delivery
          </label>
        </span>
      </div>

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

      <Button className="mt-5 w-full" onClick={handleClick}>
        CONTINUE TO PAYMENT
      </Button>
    </div>
  );
};
export default Payment;
