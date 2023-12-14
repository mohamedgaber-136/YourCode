import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./FooterBar.module.css";
import FooterCol from "../FooterCol/FooterCol";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export const FooterBar = () => {
  const date = new Date();

  const footerInfo = [
    {
      title: "logo",
      list: [
        "hello@yourCode.com",
        "+20 91813 23 2309",
        "Somewhere in the World",
      ],
    },

    {
      title: "Home",
      list: ["Benefits", "Our Courses", "Our Testimonials", "Our FAQ"],
    },
    { title: "AboutUs", list: ["Company", "Achievements", "Our Goals"] },
    {
      title: "Social Profiles",
      list: [
        <FaFacebook size={24} />,
        <FaTwitter size={24} />,
        <FaLinkedin size={24} />,
      ],
    },
  ];

  return (
    <footer className="bg-body text-dark text-center text-md-start ">
      <Container className="p-4 py-5">
        <Row>
          {footerInfo.map((item) => (
            <FooterCol title={item.title} list={item.list} />
          ))}
        </Row>
      </Container>

      <div className={styles.copyRightText}>
        <span> &copy;{date.getFullYear()}</span>
        <a>YourCode</a>
        <span> All rights reserved.</span>
      </div>
    </footer>
  );
};
