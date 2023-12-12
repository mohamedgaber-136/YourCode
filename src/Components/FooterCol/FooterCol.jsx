import React from "react";
import Col from "react-bootstrap/Col";
import logo from "../../assets/Logo.png";
import { SiGmail } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { SocialIcons } from "../SocialIcons/SocialIcons";

const FooterCol = ({ title, list }) => {
  const icons = [
    <SiGmail color="grey" />,
    <BsTelephoneFill color="grey" />,
    <FaLocationDot color="grey" />,
  ];

  return (
    <Col lg="3" md="6" className="mb-4">
      {title == "logo" ? (
        <img className="pt-2 pb-2" src={logo} />
      ) : (
        <h5 className="text-uppercase">{title}</h5>
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
