import { useState } from "react";
import { CautionIcon } from "../../../assets/icons";
import Button from "../../shared/button/Button";

const Payment = (props) => {
  // console.log("props", props);
  const array = JSON.parse(sessionStorage.getItem("paymentInfo")) || [];

  const [inputInfo, setInputInfo] = useState({
    methodCheck: "",
    cardnum: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState({
    methodError: "",
    cardError: "",
    expiryError: "",
    cvvError: "",
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    setInputInfo({
      ...inputInfo,
      [name]: value,
    });
  };

  const validate = () => {
    let error2 = { methodE: false, cardE: false, cvvE: false, expiryE: false };

    const cardNumRegex =
      /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/g;
    let cardNum = inputInfo.cardnum;

    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/g;
    let expiryD = inputInfo.expiry;

    const cvvRegex = /^[0-9]{3,4}$/g;
    let cvvNum = inputInfo.cvv;

    if (!inputInfo.methodCheck) {
      setError((prev) => ({
        ...prev,
        methodError: "delivery type not selected",
      }));
      error2.methodE = true;
    }

    if (!inputInfo.cardnum) {
      setError((prev) => ({
        ...prev,
        cardError: "empty card number",
      }));
      error2.cardE = true;
    }
    if (cardNum.match(cardNumRegex)) {
      setError((prev) => ({
        ...prev,
        cardError: "invalid card number",
      }));
      error2.cardE = true;
    }

    if (!inputInfo.expiry) {
      setError((prev) => ({
        ...prev,
        expiryError: "empty card expiry",
      }));
      error2.expiryE = true;
    }
    if (expiryD.match(expiryRegex)) {
      setError((prev) => ({
        ...prev,
        expiryError: "invalid card expiry date",
      }));
      error2.expiryE = true;
    }

    if (!inputInfo.cvv) {
      setError((prev) => ({
        ...prev,
        cvvError: "empty card cvv",
      }));
      error2.cvvE = true;
    }
    if (cvvNum.match(cvvRegex)) {
      setError((prev) => ({
        ...prev,
        cvvError: "invalid cvv",
      }));
      error2.cvvE = true;
    }

    if (error2.methodE || error2.cardE || error2.cvvE || error2.expiryE) {
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
              name="methodCheck"
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
              name="methodCheck"
              value="cod"
              checked={inputInfo.methodCheck === "cod"}
              onChange={handleChange}
            />
            Payment upon delivery
          </label>
        </span>
        {error.methodError && (
          <p className="text-red text-start">{error.methodError}</p>
        )}
      </div>

      {inputInfo.methodCheck !== "cod" ? (
        <div>
          <input
            type="text"
            name="cardnum"
            id="cardnum"
            className="border mt-2 h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
            placeholder="Card Number"
          />
          {error.cardError && (
            <p className="text-red text-start">{error.cardError}</p>
          )}
          <div className="flex items-center gap-4">
            <input
              type="text"
              name="expiry"
              id="expiry"
              className="border h-13 p-3 my-5 bg-white rounded-2xl w-full text-grayBg"
              placeholder="Expiration  (MM/YYYY)"
            />
            {error.expiryError && (
              <p className="text-red text-start">{error.expiryError}</p>
            )}
            <span className="relative">
              <input
                type="text"
                name="cvv"
                id="cvv"
                className="border h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
                placeholder="CVV"
              />
              {error.cvvError && (
                <p className="text-red text-start">{error.cvvError}</p>
              )}
              <CautionIcon className="absolute top-4 right-4" />
            </span>
          </div>
        </div>
      ) : (
        ""
      )}

      <Button className="mt-5 w-full" onClick={handleClick}>
        Order
      </Button>
    </div>
  );
};
export default Payment;
