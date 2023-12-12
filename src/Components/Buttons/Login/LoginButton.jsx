import React from "react";
import "./LoginButton.css";
import { useNavigate } from "react-router-dom";

export const LoginButton = ({ text, color, fontColor, NavigDestination }) => {
  let navigator = useNavigate();

  return (
    <button
      className="button rounded-pill"
      style={{ backgroundColor: color, color: fontColor }}
      onClick={() => {
        navigator( NavigDestination );
      }}
    >
      {text}
    </button>
  );
};
