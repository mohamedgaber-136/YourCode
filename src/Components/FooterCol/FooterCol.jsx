import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import logo from "../NavBar/Leonardo_Diffusion_XL_logo_YourCodesoftwaremind_0-removebg.png";
import { SiGmail } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import "./Footer.css";
import { GlobalContext } from "../../Context/GlobalContext";
const FooterCol = ({ column }) => {
  const icons = [
    <SiGmail color="grey" />,
    <BsTelephoneFill color="grey" />,
    <FaLocationDot color="grey" />,
  ];

  const { checkLang } = useContext(GlobalContext);
  return (
    <Col
      dir={checkLang ? "ltr" : "rtl"}
      lg="3"
      md="6"
      className="mb-4 footerLogo text-center"
    >
      {column.title == "logo" ? (
        <img className="" src={logo} />
      ) : (
        <h6 className=" footerTitle">{column.title}</h6>
      )}

      {column.tag == "social" ? (
        <SocialIcons />
      ) : (
        <div>
          {column.list.map((ele, index) => (
            <div key={`icon-${index}`}>
              {column.title == "logo" && (
                <span className="ps-2">{icons[index]}</span>
              )}
              <a
                href="#!"
                className="text-dark footerTitleList text-decoration-none"
              >
                {ele}
              </a>
            </div>
          ))}
        </div>
      )}
    </Col>
  );
};

export default FooterCol;
