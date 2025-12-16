import React from "react";
import Button from "../../shared/button/Button";

const Shipping = (props) => {
  const handleClick = () => {
    props.fun((prev) => ({ ...prev, shipBtn: false }));
  };
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

      <Button className="mt-5 w-full" onClick={handleClick}>
        CONTINUE TO PAYMENT
      </Button>
    </div>
  );
};

export default Shipping;
