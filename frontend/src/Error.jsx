import React from "react";

const Error = () => {
  return (
    <div
      className="alert alert-danger"
      role="alert"
      style={{ textAlign: "center" }}
    >
      user already exists in database
    </div>
  );
};

export default Error;
