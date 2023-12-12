import React from "react";
import Col from "react-bootstrap/Col";
import styles from "./BenefitCard.module.css";
import { IoArrowRedoOutline } from "react-icons/io5";
import Aos from 'aos'
export const BenefitCard = ({ item, index }) => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <Col lg="4" md="6" className="p-2">
      <div
        className={`${styles.card} bg-body p-4 rounded-2 gap-3 d-flex flex-column justify-content-between align-items-start shadow-sm `}
      >
        <h2 className="align-self-end fw-bolder fs-1">
          {index.toString().length == 1 ? `0${index}` : `${index}`}
        </h2>
        <div className="d-flex flex-column gap-1">
          <h5 className="fw-bold">{item.title}</h5>
          <p className="lead fs-6 m-0">{item.description} </p>
        </div>
    
      </div>
    </Col>
  );
};
