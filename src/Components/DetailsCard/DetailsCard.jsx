import React, { useEffect } from "react";
import styles from "./DetailsCard.module.css";
import Aos from "aos";
import { IoIosTimer } from "react-icons/io";

export const DetailsCard = ({ details }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-100" data-aos="zoom-in">
      <div className="bg-body rounded p-3 d-flex flex-column align-content-center justify-content-center shadow-sm text-left">
        {/* <h3 className="fw-bolder align-self-end">{details.id}</h3> */}
        <h6 className="fw-bolder">{details.title}</h6>
        <div className="d-flex flex-column gap-2 py-2">
          {details.list.map((item, index) => (
            <div
              className={`p-2 rounded-2 shadow-sm d-flex justify-content-between align-items-center gap-2 ${styles.list}`}
            >
              <div className="d-flex flex-column">
                <span className='fontSize12 fw-bold'>{item}</span>
                <span className="fontSize10">{`Lesson ${
                  index + 1 < 10 ? `0${index + 1}` : index + 1
                }`}</span>
              </div>
              <div className="bg-secondary-subtle rounded-2 d-flex justify-content-center align-items-center p-2 gap-1">
                <span className="fontSize10">
                  <IoIosTimer />
                </span>
                <span className="fontSize10">1Hour</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
