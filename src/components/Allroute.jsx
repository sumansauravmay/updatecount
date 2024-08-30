import React from "react";
import { Routes, Route } from "react-router-dom";
import Value from "./Value";
import Update from "./Update";
import Home from "./Home";
import About from "./About";

const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/value" element={<Value />}></Route>
      <Route path="/update" element={<Update />}></Route>
    </Routes>
  );
};

export default Allroute;
