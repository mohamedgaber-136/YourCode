import React, { useRef, useState } from "react";
import "./courseicons.css";
import video from "./Untitled design.mp4";
import compCHarc from './1685.jpg'
export const CoursesIcons = () => {
  return (
    <div className="    coursesIconsGrand d-flex flex-column flex-md-row justify-content-center align-items-center ">
     
      <div className="VideoSecImg">
        <img src={compCHarc} alt="comp" />
      </div>
      <div className="videoParent w-50">
        <video src={video} controls className="    p-0 m-0" />
      </div>
      <div className="w-75 coursesIconsParent py-3 rounded-2 shadow-lg   rounded mb-5">
        <div className="d-flex gap-5 justify-content-center  courseIcons ">
        <div className="iconsBorder w-25 h-75 p-5"></div>
        <div className="iconsBorder w-25 h-75 p-5"></div>
        <div className="iconsBorder w-25 h-75 p-5"></div>
        <div className="iconsBorder w-25 h-75 p-5"></div>
        <div className="iconsBorder w-25 h-75 p-5"></div>
        </div>
      </div>
    
    </div>
  );
};
