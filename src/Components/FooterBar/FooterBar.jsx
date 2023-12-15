import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./FooterBar.module.css";
import FooterCol from "../FooterCol/FooterCol";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GlobalContext } from "../../Context/GlobalContext";

export const FooterBar = () => {
  const { trans,checkLang } = useContext(GlobalContext);
  const date = new Date();

  return (
    <footer       dir={checkLang ? "ltr" : "rtl"}
    className="bg-body text-dark text-center text-md-start ">
      <Container className="p-4 py-5">
        <Row>
          {trans("footer.info", { returnObjects: true }).map((item, index) => (
            <FooterCol
              key={`col-${index}`}
              column={item}
              // title={item.title}
              // list={item.list}
            />
          ))}
        </Row>
      </Container>

      <div className={styles.copyRightText}>
        <span> &copy;{date.getFullYear()}</span>
        <a>{trans("site")}</a>
        <span> {trans("rights")}</span>
      </div>
    </footer>
  );
};
