import { useState, createContext, useContext } from "react";
import { DropArrowIcon } from "../../../assets/icons";
import OrderSummay from "../OrderSummay";
import ContactInfo from "./ContactInfo";
import CloseCard from "../CloseCard";
import Shipping from "../checkout2/Shipping";
import Payment from "../checkout3/Payment";

const Index = () => {
  const [orderState, setOrderState] = useState({
    contactBtn: true,
    shipBtn: false,
    paymentBtn: false,
  });

  const [disc, setDisc] = useState("");

  return (
    <div className="max-w-[1440px] rounded-2xl   m-5 h-screen text-white ">
      <div className="p-8  rounded-2xl  bg-grayBg  ">
        <div className="flex gap-2 items-center font-light mb-10">
          <span className="flex gap-2 items-center">
            <DropArrowIcon classname="rotate-90 md:h-5 md:w-5 fill-white" />
            <p>BACK |</p>
            <p className={orderState.contactBtn ? "text-yellow" : ""}>
              CONTACT INFORMATION
            </p>
            <DropArrowIcon classname="rotate-270 md:h-5 stroke-1 md:w-5 fill-white" />
          </span>

          <span
            className={`flex gap-2 items-center ${
              orderState.shipBtn && "text-yellow"
            }`}
          >
            SHIPPING METHOD
            <DropArrowIcon classname="rotate-270 md:h-5 stroke-1 md:w-5 fill-white" />
          </span>

          <span
            className={`flex gap-2 items-center ${
              orderState.paymentBtn && "text-yellow"
            }`}
          >
            PAYMENT
            <DropArrowIcon classname="rotate-270 md:h-5 stroke-1 md:w-5 fill-white" />
          </span>
        </div>

        <div className="flex justify-between">
          <div>
            <ContactInfo var={orderState} fun={setOrderState} />
            {!orderState.contactBtn && (
              <>
                <Shipping var={orderState} fun={setOrderState} />
                <Payment var={orderState} fun={setOrderState} />
              </>
            )}
          </div>

          <OrderSummay setDisc={setDisc} disc={disc} />
        </div>
      </div>
    </div>
  );
};

export default Index;
