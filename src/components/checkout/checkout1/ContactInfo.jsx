import React, { useState } from "react";
import Button from "../../shared/button/Button";

const ContactInfo = (props) => {
  const [inputData, setInputData] = useState({
    nameIN: "",
    phoneIN: "",
  });

  const [error, setError] = useState({
    nameError: true,
    phoneError: true,
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const validate = () => {
    if (!inputData.nameIN) {
      setError({
        ...error,
        nameError: true,
      });
    }
    if (!inputData.phoneIN) {
      setError({
        ...error,
        phoneError: true,
      });
    }

    if (error.phoneError || error.nameError) {
      return false;
    } else {
      return true;
    }
  };

  const prevInfo = JSON.parse(sessionStorage.getItem("contactInfo")) || [];

  const handleClick = (e) => {
    e.preventDefault();

    if (validate()) {
      sessionStorage.setItem(
        "contactInfo",
        JSON.stringify([...prevInfo, inputData])
      );
      props.fun((prev) => ({
        ...prev,
        contactBtn: false,
        shipBtn: true,
        editContactBtn: false,
      }));

      console.log("data uploaded");
    }
  };

  return (
    <div className="w-150">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-light">CONTACT INFORMATION</h2>
        {/* <span className="flex gap-1">
          <p className="text-greyText ">Already have an account?</p>
          <p className="">Sign in</p>
        </span> */}
      </div>

      <form id="contactForm">
        <input
          type="text"
          name="nameIN"
          id="nameIN"
          onChange={handleChange}
          value={inputData.nameIN}
          className="border h-13 p-3 my-5 bg-white rounded-2xl w-full text-grayBg"
          placeholder="Name Surname "
        />
        {error?.nameError && (
          <p className="text-redBorder text-start">{error.nameError}</p>
        )}
        <input
          type="text"
          name="phoneIN"
          id="phoneIN"
          onChange={handleChange}
          value={inputData.phoneIN}
          className="border h-13 p-3 bg-white rounded-2xl w-full text-grayBg"
          placeholder="Mobile"
        />
        {error?.phoneError && (
          <p className="text-redBorder text-start">{error.phoneError}</p>
        )}
      </form>

      <Button className="mt-5 w-full" form="contactForm" onClick={handleClick}>
        CONTINUE TO SHIPPING METHOD
      </Button>
    </div>
  );
};

export default ContactInfo;
