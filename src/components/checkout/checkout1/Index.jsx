import { useState } from "react";
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
    editContactBtn: false,
    editShipBtn: false,
  });
  // const loc = useLocation();
  // const path = loc.pathname;
  // console.log("loc", loc.pathname);
  return (
    <div className="max-w-[1440px] rounded-2xl   m-5 h-screen text-white ">
      <div className="p-8  rounded-2xl  bg-grayBg  ">
        <div className="flex gap-2 items-center font-light mb-10">
          <span className="flex gap-2 items-center">
            <DropArrowIcon classname="rotate-90 md:h-5 md:w-5 fill-white" />
            <p>BACK |</p>
            <p>CONTACT INFORMATION</p>
            <DropArrowIcon classname="rotate-270 md:h-5 stroke-1 md:w-5 fill-white" />
          </span>

          <span className="flex gap-2 items-center">
            SHIPPING METHOD
            <DropArrowIcon classname="rotate-270 md:h-5 stroke-1 md:w-5 fill-white" />
          </span>

          <span className="flex gap-2 items-center">
            PAYMENT
            <DropArrowIcon classname="rotate-270 md:h-5 stroke-1 md:w-5 fill-white" />
          </span>
        </div>

        <div className="flex justify-between">
          <div className="">
            {(() => {
              if (
                orderState.shipBtn === false &&
                orderState.contactBtn === true &&
                orderState.paymentBtn === false
              ) {
                return <ContactInfo var={orderState} fun={setOrderState} />;
              } else if (
                orderState.editContactBtn === true &&
                orderState.shipBtn === false &&
                orderState.contactBtn === false &&
                orderState.paymentBtn === true
              ) {
                return <ContactInfo var={orderState} fun={setOrderState} />;
              } else if (
                (orderState.shipBtn === true &&
                  orderState.contactBtn === false &&
                  orderState.paymentBtn === false) ||
                orderState.editShipBtn === true
              ) {
                return (
                  <>
                    <CloseCard
                      var={orderState}
                      hint="editContactBtn"
                      hint2="contactBtn"
                      fun={setOrderState}
                      head="CONTACT INFORMATION"
                      title="Name"
                      info="Ali Ahmed"
                      title2="Contact"
                      info2="+345098656"
                    />
                    <p className="h-2"></p>
                    <Shipping var={orderState} fun={setOrderState} />
                  </>
                );
              } else if (
                orderState.shipBtn === false &&
                orderState.contactBtn === false &&
                orderState.paymentBtn === true
              ) {
                return (
                  <>
                    <CloseCard
                      var={orderState}
                      hint="editContactBtn"
                      fun={setOrderState}
                      head="CONTACT INFORMATION"
                      title="Name"
                      info="Ali Ahmed"
                      title2="Contact"
                      info2="+345098656"
                    />
                    <p className="h-2"></p>
                    <CloseCard
                      hint="shipBtn"
                      hint2="editShipBtn"
                      var={orderState}
                      fun={setOrderState}
                      head="SHIPPING METHOD"
                      title="Date"
                      info="2 May,25"
                      title2="Address"
                      info2="Johar town R2 block"
                    />
                    <p className="h-2"></p>
                    <Payment var={orderState} fun={setOrderState} />
                  </>
                );
              } else {
                return <p>Error loading pages</p>;
              }
            })()}
          </div>

          <OrderSummay />
        </div>
      </div>
    </div>
  );
};

export default Index;
