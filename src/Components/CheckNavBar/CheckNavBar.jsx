import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const CheckNavBar = ({ children }) => {
  const location = useLocation();
  let [showNavBar, setShowNavBar] = useState(true);
  useEffect(() => {
    switch (location.pathname) {
      case "/Login":
      case "/SignUp":
        setShowNavBar(false);
        break;
      default:
        setShowNavBar(true);
    }
  });
  return <div className="fixed-top w-100 CheckNavBar">{showNavBar ? children : ""}</div>;
};
