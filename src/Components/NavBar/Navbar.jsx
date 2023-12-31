import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, useState, useEffect } from "react";
import { LoginButton } from "../Buttons/Login/LoginButton";
import Logo from "./Leonardo_Diffusion_XL_logo_YourCodesoftwaremind_0-removebg.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./../../Context/GlobalContext";
import "./Navbar.css";
import { DarkMode } from "../DarkModeBtn/DarkMode";
const NavbarComp = () => {
  const { checkLang, handleLang, trans } = useContext(GlobalContext);
  let navigate = useNavigate();
  let [changeBar, setChangeBar] = useState(true);


  const changeBarFunc = () => {
    setChangeBar(!changeBar);
    console.log(changeBar);
  };
  return (
    <div
      className={`   d-flex justify-content-center bg-white fixed-top`}
    >
      <Navbar
        expand="md"
        className="bg-transpernt w-50  d-flex justify-content-center    "
        dir={checkLang ? "ltr" : "rtl"}
      >
        <button
          className="LangBtn"
          onClick={(e) => handleLang(e.target.innerText)}
        >
          {checkLang ? "ar" : "en"}
        </button>
        <Navbar.Brand>
          <img src={Logo} alt="YourCodeLogo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={changeBarFunc}
          style={changeBar ? {} : { transform: "rotate(90deg)" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="gap-lg-5 gap-2">
            <div className="d-flex  justify-content-center gap-5">
              <Nav.Link
                className= "text-dark" 
                onClick={() => navigate("/")}
              >
                {trans("Navbar.Home")}
              </Nav.Link>
              <Nav.Link
                className='text-dark'
                onClick={() => navigate("/Interview")}
              >
                {trans("Navbar.Interview")}
              </Nav.Link>
              <Nav.Link className= "text-dark"  >
                {trans("Navbar.Tracks")}
              </Nav.Link>
            </div>
            <div className=" justify-content-center align-items-center gap-3 d-flex ">
              <LoginButton
                text={trans("Navbar.SignUp")}
                color={"#00f"}
                NavigDestination={"/SignUp"}
              />
              <LoginButton
                text={trans("Navbar.LOGIN")}
                NavigDestination={"/Login"}
              />
              <LoginButton
                text={trans("Navbar.Test")}
                color={"#00f"}
                fontColor={"white"}
                NavigDestination={"/MainProfile/profileData"}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <DarkMode />
    </div>
  );
};

export default NavbarComp;
