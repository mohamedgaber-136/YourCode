import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "./Subnav.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
function SubNavBar() {
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
    "flutter",
  ];
  return (
    <div className='subNavParent'>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {CourseSplite.map((item, ind) => (
          <SwiperSlide className=" text-light SubNavItem" key={ind}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SubNavBar;
