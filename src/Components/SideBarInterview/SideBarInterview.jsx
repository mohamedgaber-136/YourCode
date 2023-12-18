import React, { useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./SideBarInterview.module.css";

export const SideBarInterview = ({ list, onItemClick }) => {
  const ref = useRef(0);

  console.log(ref, "sidebarInterview");

  return (
    <div className={`${styles.sideBarFixed}`}>
      <aside className={`overflow-y-scroll ${styles.sideBarPos} `}>
        {/* <h6 className="text-white p-2 ">{content} Tutorial</h6> */}
        <Accordion
          ref={ref}
          data-bs-theme="dark"
          defaultActiveKey="0"
          className={styles.accordion}
        >
          {list.map((section, index) => (
            <Accordion.Item eventKey={index} key={`acc-${index}`}>
              <Accordion.Button className={styles.accordionButton}>
                {section.title}
              </Accordion.Button>
              <Accordion.Body className={styles.accordionBody}>
                {section.list.map((item, listIndex) => {
                  return (
                    <div
                      // ref={ref}
                      id={`${index}-${listIndex}`}
                      className="w-100"
                      onClick={onItemClick}
                      //   onClick={() => {
                      //     for (let ind in ref.current.children) {
                      //       if (ind == i) {
                      //         ref.current.children[ind].classList.add(
                      //           styles.bgBlue
                      //         );
                      //       } else {
                      //         ref.current.children[ind].classList.remove(
                      //           styles.bgBlue
                      //         );
                      //       }
                      //     }
                      //   }}
                    >
                      {item}
                    </div>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </aside>
    </div>
  );
};
