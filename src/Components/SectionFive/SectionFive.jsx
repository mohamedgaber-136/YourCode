import React, { useEffect, useRef } from "react";
import styles from "./SectionFive.module.css";
import Aos from "aos";

export const SectionFive = () => {
  const waveSvgRef = useRef();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      // delay: 3000,
      once: true,
    });

    observer.observe(waveSvgRef.current);
  }, []);

  const observer = new IntersectionObserver((entries) => {
    // console.log(entries, "entries");

    if (entries[0].isIntersecting) {
      entries[0].target.firstChild.classList.add(styles["waveAnimate"]);
    }
  });

  return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center ">
      <div className={styles.waveDraw}>
        <svg
          ref={waveSvgRef}
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 974.3 617.9"
        >
          <polyline
            fill="none"
            stroke="url(#swave-gradient)"
            // stroke="#90b8f8"
            strokeWidth={66}
            strokeLinecap="round"
            strokeLinejoin="round"
            points="813.7,33 789.4,37 776.4,42.5 773.4,52.2 779.9,65.7 800.7,83.9 941.3,247.6 941.3,263.3 918.2,269.9 
	874.5,233.6 803.9,169.5 716.1,93.7 656,58.8 612.2,37.4 588.3,33 579.3,38.2 574.3,48.9 619.7,92.6 670,134.7 726.9,187.4 
	779.6,245.2 825.8,297.9 862.7,349.1 895.9,404.3 903,418.8 899.3,430.7 885.1,430.7 866.4,424.8 823.1,383.7 776.1,337.4 
	730.6,291.7 676.1,244.9 607.4,195 545.6,153.7 499,129 439.4,98.8 408.4,85.6 375.8,75.4 367.8,82.7 402.6,112.4 477.3,172.5 
	538.9,225.5 603.9,283 654.5,333.5 713,393.2 765.2,457.9 787.8,488 798.7,506.4 798,522.1 782.5,523.6 761.8,514.3 677.2,445.1 
	576.5,357.3 510.6,305.1 424.1,247.2 336.3,195 259.1,156.2 209,138.4 192.5,133.1 187.8,138.4 187.8,146.8 246.4,186.3 338.6,255 
	426.4,325.2 470.7,361.9 523.7,407.9 592.7,479.2 649.4,541.2 665.1,562.3 669.3,575 664.5,581 649.5,579 634.2,568.3 525.8,482.9 
	448.8,424.3 393.2,383.3 336.1,346.3 258.9,307.2 185.8,277 146.3,264.8 129.4,262.6 125.7,269.8 137,279.7 230.7,347.4 
	404.5,480.2 454.2,524.8 469.7,538.8 480.7,553.6 481.5,561.2 471.9,564.3 457.9,561.8 441.7,554.3 327.8,473 257.6,434 
	180.6,391.1 136.7,371.7 104.7,360 90.2,357.6 84.2,358.6 79.7,363.6 81.7,369.6 120.3,397.6 237,483.9 291.9,527.4 300.4,533.6 
	305.3,540.3 310.1,547.6 313.2,556.1 307.7,562.1 298.6,564 285.3,565.2 270.1,561.5 247.1,556.1 204,532.7 158.5,510 116.1,493 
	88.9,482.8 68.1,476.2 48.5,471.8 35.2,470"
          />
          <linearGradient id="swave-gradient" x1="1" y1="0" x2="0" y2="0">
            <stop stopColor="#5F85DB" offset="0%"></stop>

            <stop stopColor="#90b8f8" offset="100%"></stop>
          </linearGradient>

          {/* <image
            mask="url(#step-5__mask-id)"
            x="0"
            y="2.6"
            width="973.3"
            height="615.3"
            xlink:href="/_next/static/images/draw-277bca84b84c08aff15b03bca5673df3.png"
            class="Draw__Image-sc-21f425be-1 gVGhmp"
          ></image> */}
        </svg>
      </div>
      <div
        data-aos="slide-right"
        data-aos-delay="3000"
        // data-aos-once="true"
        className={`${styles.image} h-100 d-flex align-items-center justify-content-center `}
      >
        <img
          src="./images/original-3ed620173f968cbb2cdfd4ef089e464f.png"
          height={"70%"}
          className="rounded-2 position-absolute end-0"
        />
      </div>
      <div className="bg-secondary-subtle h-100 d-flex align-items-center justify-content-center">
        <div className={styles.textContent}>
          <h3
            data-aos="zoom-in"
            data-aos-delay="3000"
            // data-aos-once="true"
            className="mb-4"
          >
            Reprehenderit sit anim pariatur
          </h3>
          <p
            data-aos="fade-up-left"
            data-aos-delay="3000"
            //  data-aos-once="true"
          >
            Amet veniam sit incididunt consequat laboris tempor velit non ut
            velit Lorem anim. Adipisicing voluptate et sit consectetur et id
            amet veniam sit. Labore anim commodo exercitation magna ea deserunt.
          </p>

          <p
            data-aos="fade-up-left"
            data-aos-delay="3000"
            // data-aos-once="true"
          >
            Dolor aliquip nisi anim eiusmod nulla dolor proident enim anim enim
            dolor. Eu laboris culpa est aute duis nisi est ea incididunt.
            Deserunt tempor irure consequat adipisicing Lorem veniam et in
            dolore laborum tempor do aute. Occaecat sit adipisicing commodo duis
            nostrud aute ex laborum anim pariatur deserunt. Nisi et do deserunt
            dolor ipsum dolore culpa est.
          </p>
        </div>
      </div>
    </section>
  );
};
