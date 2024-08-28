import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/action";

const Update = () => {
  const count = useSelector((store) => store.count);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        padding: "10px",
        marginTop: "50px",
      }}
    >
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
};

export default Update;
