import React, { useRef, useState } from "react";
import htmlIcon from "./HTML5_logo.png";
import "./courseicons.css";
import video from "./Untitled design.mp4";
export const CoursesIcons = () => {
  let videoBtn = useRef();
  let [clicked, setClicked] = useState(true);
  function playVideo() {
    if (clicked) {
      videoBtn.current.play();
      setClicked(false);
    } else {
        videoBtn.current.pause();
        setClicked(true);
    }
  }
  return (
    <div className=" mt-3 d-flex justify-content-center align-items-center flex-column">
      <div className="w-50 bg-dark py-3 rounded-pill mb-5">
        <div className="d-flex gap-5 justify-content-center courseIcons ">
          <div>
            <img src={htmlIcon} alt="HtmlIcon" />
          </div>
          <div>
            <img src={htmlIcon} alt="HtmlIcon" />
          </div>
          <div>
            <img src={htmlIcon} alt="HtmlIcon" />
          </div>
          <div>
            <img src={htmlIcon} alt="HtmlIcon" />
          </div>
          <div>
            <img src={htmlIcon} alt="HtmlIcon" />
          </div>
          <div>
            <img src={htmlIcon} alt="HtmlIcon" />
          </div>
        </div>
      </div>
      <video
        ref={videoBtn}
        src={video}
        width="500"
        height="300"
        className="    p-0 m-0"
        onClick={() => {
          playVideo();
        }}
      />
    </div>
  );
};
