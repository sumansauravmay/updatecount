import React from "react";
import { useSelector } from "react-redux";

const Value = () => {
  const count = useSelector((store) => store.count);
  console.log(count);

  return (
    <div>
      <h1 style={{ padding: "10px", marginTop: "30px" }}>{count}</h1>
    </div>
  );
};

export default Value;
