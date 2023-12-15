import React, { useContext, useEffect } from "react";
import Col from "react-bootstrap/Col";
import styles from "./BenefitCard.module.css";
import { IoArrowRedoOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { GlobalContext } from "../../Context/GlobalContext";
export const BenefitCard = ({ item, index }) => {
  const { toIndiaDigits } = useContext(GlobalContext);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Col lg="4" md="6" className="p-3 s" data-aos="fade-down">
      <div
        className={`${styles.card} bg-white px-4 rounded-2 gap-3 d-flex flex-column justify-content-center align-items-start shadow-sm `}
      >
        <h2 className="align-self-end NumberTitle fs-1">
          {index.toString().length == 1 ? `0${index}` : `${index}`}
          {/* {index.toString().length == 1
            ? toIndiaDigits(`0${index}`)
            : toIndiaDigits(`${index}`)} */}
        </h2>
        <div className="d-flex flex-column gap-1">
          <h5 className="fw-bold">{item.title}</h5>
          <p className="benefitPara  m-0">{item.description} </p>
        </div>
      </div>
    </Col>
  );
};
