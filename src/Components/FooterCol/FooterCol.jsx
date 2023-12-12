import React from "react";
import Col from "react-bootstrap/Col";
import logo from "../NavBar/Leonardo_Diffusion_XL_logo_YourCodesoftwaremind_0-removebg.png";
import { SiGmail } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import './Footer.css'
const FooterCol = ({ title, list }) => {
  const icons = [
    <SiGmail color="grey" />,
    <BsTelephoneFill color="grey" />,
    <FaLocationDot color="grey" />,
  ];

  return (
    <Col lg="3" md="6" className="mb-4 footerLogo  d-flex flex-column">
      {title == "logo" ? (
        <img className="py-2  align-self-center" src={logo} />
      ) : (
        <h5 className="text-uppercase fw-bold">{title}</h5>
      )}

      {title == "Social Profiles" ? (
        <SocialIcons />
      ) : (
        <ul className="list-unstyled ">
          {list.map((ele, index) => (
            <li>
              {title == "logo" && <span className="pe-2">{icons[index]}</span>}
              <a href="#!" className="text-dark text-decoration-none">
                {ele}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Col>
  );
};

export default FooterCol;
