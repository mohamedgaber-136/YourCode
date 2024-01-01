import "./SectionFour.css";
import AOS from "aos";
import "aos/dist/aos.css";
import DownImg from "./html-css-collage-concept-with-person.jpg";
import TopImg from "./person-front-computer-working-html.jpg";
import React, { useEffect } from "react";
export const SectionFour = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" border SectionFourParent d-flex justify-content-center align-items-center ">
      <div
        className="SectionFourChild"
        data-aos-delay="500"
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="5000"
        data-aos-easing="linear"
      ></div>
      <div className=" SectionFourptTwo w-75 h-100 d-flex flex-column flex-md-row justify-content-center">
        <div className=" py-lg-5  h-100  ">
          <h6 className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, mollitia.
          </h6>
          <br />
          <h6 className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, mollitia.
          </h6>
          <br />
          <h6 className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, mollitia.
          </h6>
          <br />
          <h6 className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, mollitia.
          </h6>
          <br />
        </div>
        <div
          className=" d-flex gap-4  justify-content-between flex-column h-100 align-items-center SectionFourptThree  "
          data-aos-delay="1000"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="5000"
          data-aos-easing="linear"
        >
          <div id="child">
            <img src={TopImg} alt="TopImg" />
          </div>
          <div id="childtwo">
            <img src={DownImg} alt="DownImg" />
          </div>
        </div>
      </div>
    </div>
  );
};
