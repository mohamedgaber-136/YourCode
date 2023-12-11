import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SubNavBar from '../SubNavBar/SubNavBar'
import "./Navbar.css";

const NavbarComp = () => {
  const [t, i18n] = useTranslation("global");
  const [checkLang, setLang] = useState(true);
  const handleLang = (lang) => {
    setLang(false);
    if (!checkLang) {
      setLang(true);
    }
    i18n.changeLanguage(lang);
  };
  // let { t, handleLang, checkLang } = useContext(langContext);
  return (
    <div className="   d-flex justify-content-center glassBackGroung fixed-top">
      <Navbar
        expand="lg"
        className="bg-transpernt w-50  d-flex justify-content-center   "
        dir={checkLang ? "ltr" : "rtl"}
      >
        <button
          className="LangBtn"
          onClick={(e) => handleLang(e.target.innerText)}
        >
          {checkLang ? "ar" : "en"}
        </button>
          <Navbar.Brand >{t("Navbar.Logo")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >InterView</Nav.Link>
              <Nav.Link >Tracks</Nav.Link>
              <button className="btn-danger btn mx-2" >SignUp</button>
              <button className="btn btn-warning" >Login</button>
            
            </Nav>
          </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

export default NavbarComp;
