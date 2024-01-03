import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.403)",
      }}
    >
      <h1> Crud Application </h1>

      <div className="links">
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          Upload Product
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black", marginLeft: "2rem" }}
          to={"/dashboard"}
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
