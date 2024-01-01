import React, { useEffect, useRef } from "react";
import styles from "./SectionThree.module.css";
import Aos from "aos";

export const SectionThree = () => {
  const vLineSvgRef = useRef();

  useEffect(() => {
    Aos.init({
      delay: 300,
      duration: 1000,
      once: true,
    });
    observer.observe(vLineSvgRef.current);
  }, []);

  const observer = new IntersectionObserver((entries) => {
    // console.log(entries, "entries");

    if (entries[0].isIntersecting) {
      entries[0].target
        .querySelector("polyline")
        .classList.add(styles["vLineAnimate"]);
    }
  });
  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{ backgroundColor: "#0066FF" }}
    >
      <div className={styles.vLineDiv}>
        <svg
          ref={vLineSvgRef}
          viewBox="0 0 1500 687"
          // preserveAspectRatio="xMidYMax meet"

          // class="VLine__Svg-sc-789dc456-0 kPuFVd"
        >
          <linearGradient id="sw-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="rgb(255, 69, 88)" offset="0%"></stop>
            {/* <stop stopColor="rgb(255, 228, 26)" offset="50%" ></stop> */}
            <stop stopColor="rgb(255, 228, 26)" offset="100%"></stop>
          </linearGradient>

          <polyline
            // points="65.8,187.9 277.7,537.3 564.6,77 1370,77"
            points="65.8,187.9 277.7,537.3 564.6,77 1500,77"
            fill="none"
            stroke="url(#sw-gradient)"
            strokeLinejoin="round"
            // strokeLinecap="square"
            strokeWidth={110}
            // class="VLine__LargeStroke-sc-789dc456-1 btFVTN"
          ></polyline>
          {/* <rect
            width="1230"
            height="687"
            x="0"
            y="0"
            fill="#fff"
            // class="VLine__MaskLargeStroke-sc-789dc456-2 hWcUkO"
          ></rect> */}
        </svg>
      </div>

      <div
        data-aos="fade"
        data-aos-delay="1000"
        className="position-absolute d-flex align-items-center justify-content-center"
        // style={{ top: "5%" }}
      >
        <img
          src="./images/original-3ed620173f968cbb2cdfd4ef089e464f-copy.png"
          width={"80%"}
          className="rounded-2"
        />
      </div>
    </section>
  );
};
