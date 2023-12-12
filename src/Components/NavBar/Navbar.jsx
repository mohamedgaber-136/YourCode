import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SubNavBar from "../SubNavBar/SubNavBar";
import "./Navbar.css";
import { LoginButton } from "../Buttons/Login/LoginButton";

const NavbarComp = () => {
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
   setChangeBar(!changeBar)
   console.log(changeBar)
  };
  // let { t, handleLang, checkLang } = useContext(langContext);
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
        <Navbar.Brand>{t("Navbar.Logo")}</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={changeBarFunc}
           style={changeBar?{}:{ transform: "rotate(90deg)" }}   
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-5">
            <div className="d-flex  justify-content-center gap-5">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>InterView</Nav.Link>
              <Nav.Link>Tracks</Nav.Link>
            </div>
            <div className=" justify-content-center gap-3 d-flex ">
              <LoginButton text={"SignUp"} color={"#750E21"} />
              <LoginButton text={"LOGIN"} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
