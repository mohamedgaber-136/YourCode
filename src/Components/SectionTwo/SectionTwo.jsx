import React, { useContext, useEffect } from "react";
import './sectionTwo.css'
import AOS from "aos";
import "aos/dist/aos.css";
import sqaureImg from './decoration1-e87f0b765e7dd2130133bcfd036c9c5a.svg'
import sqaureImgDown from './decoration2-55d4cfb48847f39e474c1027a56721b5.svg'
import bgScreen from './Adobe_Ill.png'
import { GlobalContext } from "../../Context/GlobalContext";
import itemOne from './tablet.gif'
import itemTwo from './photo-editor.gif'
import itemThree from './paint-brush.gif'
export const SectionTwo = () => {
  let {trans} =useContext(GlobalContext)
  useEffect(()=>{
    AOS.init()
  },[])
  console.log(trans("courses.list", { returnObjects: true }))
  return (
    <div className=' SectionTwoParent d-flex flex-column  gap-4 flex-md-row py-5'>
<div className="LftSideImg container container-fluid-lg   h-100 " data-aos="fade-right" data-aos-once="true" data-aos-duration="2000" data-aos-delay="500">
  <img src={bgScreen} alt="bgScreen" />
</div>
<div className="rightSideContent  container container-fluid-lg    h-100 d-flex flex-column gap-2">
 <h2>
   {trans("courses.list",{ returnObjects: true })[0].title}
  </h2>
  <ul className="d-flex flex-column gap-4 p-0 m-0">
    <li>
    {trans("courses.list",{ returnObjects: true })[0].level}
    </li>
    <li>
    {trans("courses.list",{ returnObjects: true })[0].duration}
    </li>
    <li>
    {trans("courses.list",{ returnObjects: true })[0].instructor}
    </li>
    <li>
    {trans("courses.list",{ returnObjects: true })[0].description}
    </li>
    <li>
    {trans("courses.list",{ returnObjects: true })[0].description}
    </li>
    
  <div className=" IconsGifParent d-flex justify-content-center align-items-start gap-3">
    <img src={itemOne} alt="itemOne" />
    <img src={itemTwo} alt="itemTwo" />
    <img src={itemThree} alt="itemThree" />
  </div>
  </ul>
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
