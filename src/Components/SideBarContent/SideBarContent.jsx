import React from "react";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
// import "./SideBarContent.css";
import { Link } from "react-router-dom";
import styles from "./SideBarContent.module.css";

export const SideBarContent = ({ list, content }) => {
  return (
    <Col
      lg="2"
      md="3"
      sm="3"
      xs="3"
      style={{ backgroundColor: "black", }}
    >
      <aside className="overflow-y-scroll" style={{height: "100vh" }}>
        <Accordion
          data-bs-theme="dark"
          defaultActiveKey="0"
          className={styles.accordion}
        >
          {list.map((section, index) => (
            <Accordion.Item eventKey={index} key={`acc-${index}`}>
              {/* <Accordion.Header className={styles.accordionButton}>
                {section.title}
              </Accordion.Header> */}
                <Accordion.Button className={styles.accordionButton}>
                {section.title}
              </Accordion.Button>
              <Accordion.Body className={styles.accordionBody}>
                {"Aliqua exercitation magna esse excepteur labore veniam voluptate non minim. Sunt fugiat pariatur aliquip exercitation ut ullamco reprehenderit ad sunt laboris do incididunt tempor. Aute et magna amet laboris amet velit culpa irure aute dolor. Cillum dolore eu quis minim eu eu nisi occaecat. Irure proident sint dolor ex pariatur ea ut consectetur laborum do duis do do. Adipisicing do excepteur incididunt consectetur laboris consequat et tempor. Cillum adipisicing commodo labore commodo exercitation nulla consequat nisi occaecat."
                  .split(" ")
                  .map((item, i) => (
                    <Link
                      to={`/Explore/${content}/${item}${i}`}
                      className={`text-decoration-none text-light ${styles.item}`}
                    >
                      <div className="w-100">{item}</div>
                    </Link>
                  ))}
                {/* {section.list.map((item,i) => (
                  <Link
                    to={`/Explore/${content}/${item}${i}`}
                    className={`text-decoration-none text-light ${styles.item}`}
                  >
                    <div className="w-100">{item}</div>
                  </Link>
                ))} */}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </aside>
    </Col>
  );
};
