import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FooterBar } from "../FooterBar/FooterBar";
export const CheckFooter = () => {
  const location = useLocation();
  let [ShowFooter, setShowFooter] = useState(true);
  console.log(location.pathname,'pathNameFooter')
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setShowFooter(true);
        break;
        default:
          setShowFooter(false);
        }
      });
      console.log(ShowFooter)
  return (
    <div >
      {
        ShowFooter?      <FooterBar/>
        :''
      }
    </div>
  );
};
