import { useState } from "react";
import Button from "../../shared/button/Button";

const Payment = (props) => {
  const array = JSON.parse(sessionStorage.getItem("paymentInfo")) || [];
  const [inputInfo, setInputInfo] = useState({
    methodCheck: "",
  });

  const [error, setError] = useState({
    methodError: true,
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    setInputInfo({
      ...inputInfo,
      [name]: value,
    });
  };

  const validate = () => {
    if (!inputInfo.methodCheck) {
      setError({
        ...error,
        methodError: true,
      });
    }

    if (error.methodError) {
      return false;
    } else {
      return true;
    }
  };

  const handleClick = () => {
    if (validate()) {
      sessionStorage.setItem(
        "paymentInfo",
        JSON.stringify([...prevInfo, inputInfo])
      );
      props.fun((prev) => ({ ...prev, paymentBtn: false }));
    }
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
              value="card"
              checked={inputInfo.methodCheck === "card"}
              onChange={handleChange}
            />
            By card
          </label>
          <label>
            <input
              type="radio"
              className="bg-blackC mr-1"
              name="deliveryType"
              value="cod"
              checked={inputInfo.methodCheck === "cod"}
              onChange={handleChange}
            />
            Payment upon delivery
          </label>
        </span>
      </div>

      <input
        type="text"
        name="cardnum"
        id="cardnum"
        className="border mt-2 h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
        placeholder="Card Number"
      />
      <div className="flex items-center gap-4">
        <input
          type="text"
          name="expiry"
          id="expiry"
          className="border h-13 p-3 my-5 bg-white rounded-2xl w-full text-grayBg"
          placeholder="Expiration "
        />
        <input
          type="text"
          name="cvv"
          id="cvv"
          className="border h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
          placeholder="CVV"
        />
      </div>

      <Button className="mt-5 w-full" onClick={handleClick}>
        CONTINUE TO PAYMENT
      </Button>
    </div>
  );
};
export default Payment;
