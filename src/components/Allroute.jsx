import React from "react";
import { Routes, Route } from "react-router-dom";
import Value from "./Value";
import Update from "./Update";

const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Value />}></Route>
      <Route path="/update" element={<Update />}></Route>
    </Routes>
  );
};

export default Allroute;
