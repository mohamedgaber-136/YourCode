import React, { useContext,useEffect } from "react";
import "./header.css";
import { TypeAnimation } from 'react-type-animation';
import { GlobalContext } from "../../Context/GlobalContext";
import charc from './Leonardo_Diffusion_XL_Frontend_developer_1.jpg'
import bgImg from './Leonardo_Diffusion_XL_Frontend_developers_2.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
export const Header = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  const { trans, checkLang } = useContext(GlobalContext);
  console.log(2+"2")
  
  return (
    <>
      <header className=" flex-md-row d-flex justify-content-center conainet px-lg-5 py-5 gap-3 flex-column align-items-center headerParent ">
        <div className="headerChild h-50 d-flex flex-column justify-content-center align-items-center">
          <div
            dir={checkLang ? "ltr" : "rtl"}
            className="d-flex justify-content-center flex-column align-items-center gap-1 "
          >
            <i className="fa-solid fa-bolt  bg-dark p-2 rounded-circle"></i>
            <h2 className="m-0 text-center text-dark">
              <span className="textUnlock">{trans("Header.colored")}</span>{" "}
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        trans("Header.first")
       ,
        1000 // wait 1s before replacing "Mice" with "Hamsters"
        
      ]}
      wrapper="h2"
      speed={300}
    />            </h2>
          </div>
          <h5 className="m-0 text-center text-dark">{trans("Header.second")}</h5>
          <h6 className="m-0 text-center text-dark">{trans("Header.third")} </h6>
          <div className="d-flex">
            <button className="btn  buttonsWithoutBorderRight">
              {trans("Header.explore")}
            </button>
            <button className="btn btn-dark buttonsWithoutBorderLeft ">
              {trans("Header.price")}
            </button>
          </div>
        </div>
        <div className="headerChildImg  w-100 h-50 d-flex justify-content-center align-items-center  " data-aos="fade-left" data-aos-once="true" data-aos-duration="2000" data-aos-delay="500">
          <div className=" w-75 h-100  HeaderLftSide">
            <img src={charc} alt="charc" />
          </div>
          <div className="secondImg">
            <img src={bgImg} alt="Bgimg" />
          </div>
        </div>
        <div className="SkewLine"></div>
        <div className="SkewLineTwo"></div>
      </header>
    </>
  );
};
