import React, { useRef, useState } from "react";
import "./courseicons.css";
import video from "./Untitled design.mp4";
import compCHarc from './1685.jpg'
export const CoursesIcons = () => {
  return (
    <div className="  py-5  coursesIconsGrand d-flex justify-content-center align-items-center ">
     
      <div className="VideoSecImg">
        <img src={compCHarc} alt="comp" />
      </div>
      <div className="videoParent w-50">
        <video src={video} controls className="    p-0 m-0" />
      </div>
      {/* <div className="w-75 coursesIconsParent py-3 rounded-pill mb-5">
        <div className="d-flex gap-5 justify-content-center courseIcons ">
        
        </div>
      </div> */}
    
    </div>
  );
};
