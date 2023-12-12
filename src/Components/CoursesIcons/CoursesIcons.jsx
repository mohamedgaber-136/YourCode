import React, { useRef, useState } from "react";
import htmlIcon from "./HTML5_logo.png";
import "./courseicons.css";
import video from "./Untitled design.mp4";
export const CoursesIcons = () => {
  return (
    <div className="  coursesIconsGrand d-flex justify-content-center align-items-center flex-column">
      <div className="w-75 coursesIconsParent py-3 rounded-pill mb-5">
        <div className="d-flex gap-5 justify-content-center courseIcons ">
        
        </div>
      </div>
      <div className="videoParent">
        <video src={video} controls className="    p-0 m-0" />
      </div>
    </div>
  );
};
