import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const CheckFooter = ({ children }) => {
  const location = useLocation();
  let [ShowFooter, setShowFooter] = useState(true);
  useEffect(() => {
    switch (location.pathname) {
      case "/Login":
      case "/SignUp":
      case "/MainProfile":
        setShowFooter(false);
        break;
      default:
        setShowFooter(true);
    }
  });
  return (
    <div >
      {ShowFooter ? children : ""}
    </div>
  );
};
