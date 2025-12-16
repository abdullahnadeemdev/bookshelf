import React from "react";

const CloseCard = (props) => {
  // console.log("props", props);
  // console.log("props var of close", props.hint);
  let { hint } = props;
  let { hint2 } = props;
  // console.log("name", hint);

  const handleClick = () => {
    console.log("CLOSED props.var beforeee", props.var);
    props.fun((prev) => ({ ...prev, [hint]: true }));
    console.log("CLOSED props.var after", props.var);
  };
  return (
    <div className="bg-blackC rounded-2xl p-4 w-150">
      <div className="flex justify-between">
        <p>{props.head}</p>
        <button className="underline" onClick={handleClick}>
          EDIT
        </button>
      </div>
      <div className="flex justify-between">
        <p>{props.title}</p>
        <p>{props.info}</p>
      </div>
      <div className="flex justify-between">
        <p>{props.title2}</p>
        <p>{props.info2}</p>
      </div>
    </div>
  );
};

export default CloseCard;
