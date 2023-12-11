import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import './Navbar.css'
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
  return (
    <div className=" d-flex justify-content-center pt-2      ">
      <Navbar expand="lg" className="bg-transpernt rounded-5  border ">
        <button
          className="LangBtn"
          onClick={(e) => handleLang(e.target.innerText)}
        >
          {checkLang ? "ar" : "en"}
        </button>
        <Container>
          <Navbar.Brand href="#home">{t("Navbar.Logo")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
