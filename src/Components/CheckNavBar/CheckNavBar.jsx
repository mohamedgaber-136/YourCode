import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarComp from "../NavBar/Navbar";
import SubNavBar from "../SubNavBar/SubNavBar";
export const CheckNavBar = () => {
  const location = useLocation();
  let [showNavBar, setShowNavBar] = useState(true);
  console.log(location.pathname,'pathName')
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setShowNavBar(true);
        break;
      default:
        setShowNavBar(false);
    }
  });
  console.log(showNavBar,'NAv')
  return (
<>
{
  showNavBar?<div className="fixed-top w-100 CheckNavBar">
    <NavbarComp/>
    <SubNavBar/>
  </div>:''
}
</>
      
  );
};
