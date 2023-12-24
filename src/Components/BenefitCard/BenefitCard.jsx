import React, { useContext, useEffect } from "react";
import styles from "./BenefitCard.module.css";
import { IoArrowRedoOutline } from "react-icons/io5";

import { GlobalContext } from "../../Context/GlobalContext";
export const BenefitCard = ({ item, index }) => {
  const { toIndiaDigits } = useContext(GlobalContext);

  return (
    <div  className="p-3 benefitCard" >
      <div
        className={`${styles.card}  px-4 rounded-2 gap-3 d-flex flex-column justify-content-center align-items-start shadow-lg `}
      >
        <h2 className="align-self-end NumberTitle fs-1">
          {index.toString().length == 1 ? `0${index}` : `${index}`}
      
        </h2>
        <div className="d-flex flex-column gap-1">
          <h5 className="fw-bold">{item.title}</h5>
          <p className="benefitPara  m-0">{item.description} </p>
        </div>
      </div>
    </div>
  );
};
