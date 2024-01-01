import React, { useEffect } from "react";
import "./courseicons.css";
import video from "./Untitled design.mp4";
import compCHarc from "./imageonline-co-textimage-removebg-preview.png";
import svgBlue from "./decoration1-089f9cb8c06f5e7ca93a63b3512ccd24.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { MultiWaveSvg } from "../MultiWaveSvg/MultiWaveSvg";
export const CoursesIcons = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="ImgAndVideoContainer     coursesIconsGrand d-flex  flex-row justify-content-center  ">
        <div className="d-flex justify-content-center  ">
          <div
            className="svgsImg"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <img src={svgBlue} alt="svg" />
          </div>
          <div
            className="videoParent    d-flex justify-content-center align-items-center"
            data-aos-once="true"
            data-aos-duration="2000"
            data-aos-delay="500"
            data-aos="zoom-in"
          >
            <video
              src={video}
              autoPlay="true"
              loop="true"
              muted
              className="    p-0 m-0"
            />
          </div>
          <div
            className=" ImgVideoParent"
            data-aos-once="true"
            data-aos-duration="2000"
            data-aos-delay="500"
            data-aos="zoom-in"
          >
            <img src={compCHarc} alt="videoIntro" />
          </div>
        </div>
        <div className="w-75 coursesIconsParent py-3 rounded-2 shadow-lg  d-none rounded mb-5">
          <div className="d-flex gap-5 justify-content-center  courseIcons ">
            <div className="iconsBorder w-25 h-75 p-5"></div>
            <div className="iconsBorder w-25 h-75 p-5"></div>
            <div className="iconsBorder w-25 h-75 p-5"></div>
            <div className="iconsBorder w-25 h-75 p-5"></div>
            <div className="iconsBorder w-25 h-75 p-5"></div>
          </div>
        </div>
      </div>
      {/* <MultiWaveSvg direction="top" /> */}
    </>
  );
};
