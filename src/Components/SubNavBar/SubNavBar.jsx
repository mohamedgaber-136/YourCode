import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "./Subnav.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
function SubNavBar() {
  const navigator = useNavigate();
  let CourseSplite = [
    "Html5",
    "CSS3",
    "BS5",
    "JQUERY",
    "JavaScript",
    "EcmaScript6",
    "ReactJs",
    "OOP",
    "Dart",
    "Flutter",
  ];
  return (
    <div className="subNavParent">
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {CourseSplite.map((item, ind) => (
          <SwiperSlide
            key={ind}
            className=" text-light SubNavItem"
            onClick={() => navigator(`/Explore/${item}/intro`)}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SubNavBar;
