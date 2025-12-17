import React from "react";
import Button from "../../shared/button/Button";

const Shipping = (props) => {
  const [inputData, setInputData] = useState({
    address: "",
    note: "",
  });

  const [error, setError] = useState({
    addressError: true,
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const validate = () => {
    if (!inputData.address) {
      setError({
        ...error,
        addressError: true,
      });
    }

    if (error.addressError) {
      return false;
    } else {
      return true;
    }
  };

  const prevInfo = JSON.parse(sessionStorage.getItem("shipInfo")) || [];

  const handleClick = () => {
    e.preventDefault();

    if (validate()) {
      sessionStorage.setItem(
        "shipInfo",
        JSON.stringify([...prevInfo, inputData])
      );
      props.fun((prev) => ({
        ...prev,
        shipBtn: false,
        editShipBtn: false,
        paymentBtn: true,
      }));
    }
  };

  return (
    <div className="w-150 mt-5">
      <h2 className="text-2xl font-light">SHIPPING METHOD</h2>
      <form action="">
        <div id="shipForm" className="flex items-center gap-4">
          <input
            type="text"
            name="date"
            id="date"
            className="border h-13 p-3 my-5 bg-white rounded-2xl w-full text-grayBg"
            placeholder="Today "
          />
          <input
            type="text"
            name="time"
            id="time"
            className="border h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
            placeholder="Time"
          />
        </div>
        <input
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
          value={inputData.address}
          className="border h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
          placeholder="Address"
        />
        <textarea
          name="note"
          id="note"
          onChange={handleChange}
          value={inputData.note}
          className="border mt-2 p-3 bg-white rounded-2xl w-full text-grayBg"
          placeholder="note"
        ></textarea>
      </form>

      <Button className="mt-5 w-full" form="shipForm" onClick={handleClick}>
        CONTINUE TO PAYMENT
      </Button>
    </div>
  );
};

export default Shipping;
