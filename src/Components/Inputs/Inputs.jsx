import React from "react";

export const Inputs = ({type,spanText}) => {
  return (
    <label>
      <input type={type} className="input" />
      <span className="text-dark">{spanText}</span>
    </label>
  );
};
