import React, { useEffect } from "react";
import "./sectionTwo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import sqaureImg from "./decoration1-e87f0b765e7dd2130133bcfd036c9c5a.svg";
import sqaureImgDown from "./decoration2-55d4cfb48847f39e474c1027a56721b5.svg";
import bgScreen from "./Adobe_Ill.png";
export const SectionTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="vh-100 SectionTwoParent d-flex flex-column  gap-4 flex-md-row py-5">
      <div
        className="LftSideImg   h-100 "
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        <img src={bgScreen} alt="bgScreen" />
      </div>
      <div className="rightSideContent    h-100 d-flex flex-column gap-2">
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
          tenetur.
        </h6>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
          tenetur.
        </h6>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
          tenetur.
        </h6>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
          tenetur.
        </h6>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
          tenetur.
        </h6>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
          tenetur.
        </h6>
      </div>
      <div className="squareImg">
        <img src={sqaureImg} alt="sqaureImg" />
      </div>
      <div className="squareImgDown">
        <img src={sqaureImgDown} alt="sqaureImgDown" />
      </div>
    </div>
  );
};
