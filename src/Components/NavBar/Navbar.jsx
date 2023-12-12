import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Navbar.css";
import { LoginButton } from "../Buttons/Login/LoginButton";
import Logo from './Leonardo_Diffusion_XL_logo_YourCodesoftwaremind_0-removebg.png'
import {useNavigate} from 'react-router-dom'
const NavbarComp = () => {
  let navigate = useNavigate()
  let [changeBar, setChangeBar] = useState(true);
  const [t, i18n] = useTranslation("global");
  const [checkLang, setLang] = useState(true);
  const handleLang = (lang) => {
    setLang(false);
    if (!checkLang) {
      setLang(true);
    }
    i18n.changeLanguage(lang);
  };
  const changeBarFunc = () => {
    setChangeBar(!changeBar);
    console.log(changeBar);
  };
  return (
    <div className="   d-flex justify-content-center glassBackGroung fixed-top">
      <Navbar
        expand="lg"
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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-lg-5 gap-2">
            <div className="d-flex  justify-content-center gap-5">
              <Nav.Link onClick={()=>navigate('/')} >Home</Nav.Link>
              <Nav.Link>InterView</Nav.Link>
              <Nav.Link>Tracks</Nav.Link>
            </div>
            <div className=" justify-content-center gap-3 d-flex ">
              <LoginButton text={"SignUp"} color={"#750E21"} NavigDestination={'/SignUp'} />
              <LoginButton text={"LOGIN"} NavigDestination={'/Login'} />
              <LoginButton text={"Test"} color={"#F4F27E"} fontColor={'black'}  />
              
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
