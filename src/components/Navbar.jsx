import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>

<Link to="/about">
        <h1>About</h1>
      </Link>

      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/value">
        <h1>Value</h1>
      </Link>

      <Link to="/update">
        <h1>Update</h1>
      </Link>
    </div>
  );
};

export default Navbar;
