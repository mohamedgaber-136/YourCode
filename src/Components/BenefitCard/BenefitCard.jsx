import React, { useContext, useEffect } from "react";
import styles from "./BenefitCard.module.css";
import { IoArrowRedoOutline } from "react-icons/io5";

import { GlobalContext } from "../../Context/GlobalContext";
import Aos from "aos";
export const BenefitCard = ({ item, index }) => {
  const { toIndiaDigits } = useContext(GlobalContext);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 300,
      easing: "linear",
      once: false,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      // data-aos-delay="500"
      // data-aos-once="false"
      // data-aos-duration="2000"
      // data-aos-easing="linear"
      className="p-3 benefitCard"
    >
      <div
        className={`${styles.card}  px-4 rounded-2 gap-3 d-flex flex-column justify-content-center align-items-start shadow`}
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
