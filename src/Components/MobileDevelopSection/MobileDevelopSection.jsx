import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./MobileDevelopSection.module.css";
import Aos from "aos";

export const MobileDevelopSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, delay: 400 });
  }, []);

  return (
    <section className="min-vh-100 position-relative d-flex  align-items-center justify-content-center">
      <div className="w-100 position-absolute top-0">
        <img src="./images/wave-haikei.svg" width={"100%"} />
      </div>
      <div data-aos="fade-up" className="position-absolute end-0 bottom-0">
        <img
          src="./images/blob-2.svg"
          width={"100%"}
          className={styles.blobShape}
        />
      </div>

      <div data-aos="fade" className={styles.hexaImage}>
        <img
          data-aos="flip-right"
          src="./images/hexaShap.svg"
          width={"100%"}
          height={"100%"}
          className={styles.hexaShape}
        />

        <img
          src="./images/mobile-app-development-3322480-2781016.png"
          className={styles.mobileImage}
          width={"100%"}
          // height={"100%"}
        />
      </div>

      <div className="w-50 h-100 p-2 d-flex flex-column align-items-center justify-content-center">
        <div className={styles.contentText}>
          <h3 data-aos="zoom-in">Ipsum tempor est anim consectetur </h3>
          <p data-aos="zoom-in">
            Magna irure laboris aliquip cupidatat ex nulla dolor. Quis ex aliqua
            sit aliqua reprehenderit ad deserunt veniam ut laboris adipisicing
            quis. Aliqua tempor adipisicing irure irure do. Cupidatat ullamco
            voluptate Lorem minim nulla est consequat pariatur elit voluptate
            laborum laboris do. Ex nulla veniam dolore aliquip veniam duis sit
            dolore quis dolore exercitation irure fugiat. Dolore fugiat amet
            elit id do commodo incididunt.
          </p>
        </div>
      </div>

      {/* <div className="w-100 bg-info-subtle position-absolute top-0">
        <img src="./images/wave-haikei.svg" width={'100%'}/>
      </div> */}

      {/* <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:bx="https://boxy-svg.com"
      >
        <defs>
          <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
            <stop offset="0%" stop-color="lightblue" />
            <stop offset="50%" stop-color="black" />
           <stop offset="100%" stop-color="var(--color-bot)" /> 
          </linearGradient>
        </defs>
        <path
          d="M 666.103 405.572 Q 674 401.012 681.897 405.572 L 764.819 453.446 Q 772.717 458.006 772.717 467.125 L 772.717 562.875 Q 772.717 571.994 764.819 576.554 L 681.897 624.428 Q 674 628.988 666.103 624.428 L 583.181 576.554 Q 575.283 571.994 575.283 562.875 L 575.283 467.125 Q 575.283 458.006 583.181 453.446 Z"
          // className={styles.hexaShape}
          // style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-opacity: 0; stroke-width: 0px;"
          transform="matrix(0.000073, 1, -1, 0.000073, 770.866394, -503.854004)"
          bx:shape="n-gon 674 515 113.988 113.988 6 0.08 1@c1c50f7e"
        />
      </svg> */}

      {/* <svg xmlns="http//www.w3.org/2000/svg" viewBox="0 0 120 70" width="300">
        <defs>
          <path id="corner" d="M -1 -2 L 6 0 Q 0 0 -3 5.2 Z" />
          <mask id="hex">
            <path
              d="M 0 34.64 L 20 0 L 100 0 L 120 34.64 L 100 69.28 L 20 69.28 Z"
              fill="white"
            />
            <g fill="black">
              <use transform="translate(20 0)" href="#corner" />
              <use transform="translate(0 34.64) rotate(-60)" href="#corner" />
              <use
                transform="translate(20 69.28) rotate(-120)"
                href="#corner"
              />
              <use
                transform="translate(100 69.28) rotate(-180)"
                href="#corner"
              />
              <use
                transform="translate(120 34.64) rotate(-240)"
                href="#corner"
              />
              <use transform="translate(100 0) rotate(-300)" href="#corner" />
            </g>
          </mask>
        </defs>
        <rect width="120" height="70" fill="#42aaab" mask="url(#hex)" />
      </svg> */}

      {/* <div className="bg-danger-subtle">

        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            variants={draw}
            custom={1}
          />
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            variants={draw}
            custom={2.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0099ff"
            variants={draw}
            custom={3}
          />
        </motion.svg>
      </div> */}

      {/* <div className=" bg-success-subtle">
        <div width="6296" class="fzIbsJ">
          <div
            class="Slider__Card-sc-f48522bf-4 ebyfBL"
            style='background-image: url("/_next/static/images/1-0bad628663915404c2d812cb16f63c07.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 eKYgKa"
            style='background-image: url("/_next/static/images/2-700d894f64533a3a0a7be4e1918d7203.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 buYxGd"
            style='background-image: url("/_next/static/images/3-4e46ca5cbe5db052ec64944d89e28e2f.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 eBNdOI"
            style='background-image: url("/_next/static/images/4-4fe5b0a8a9435f4cd919dcd274d325c5.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 jZjABz"
            style='background-image: url("/_next/static/images/5-9a05149c73d67f684fbcd1b315a31afc.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 kIJBJO"
            style='background-image: url("/_next/static/images/6-50f3a45cd44cea655cbeb9b902b7206d.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 hsJSFR"
            style='background-image: url("/_next/static/images/7-9cf77193f77ae681342357681f44c2df.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 kzyyOw"
            style='background-image: url("/_next/static/images/8-8db0f75252212c64caed277ce68f00ec.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 hoFlmz"
            style='background-image: url("/_next/static/images/1-0bad628663915404c2d812cb16f63c07.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 hYfmuO"
            style='background-image: url("/_next/static/images/2-700d894f64533a3a0a7be4e1918d7203.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 hYPUUO"
            style='background-image: url("/_next/static/images/3-4e46ca5cbe5db052ec64944d89e28e2f.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 NsJLn"
            style='background-image: url("/_next/static/images/4-4fe5b0a8a9435f4cd919dcd274d325c5.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 dDqlkQ"
            style='background-image: url("/_next/static/images/5-9a05149c73d67f684fbcd1b315a31afc.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 qJeZN"
            style='background-image: url("/_next/static/images/6-50f3a45cd44cea655cbeb9b902b7206d.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 eJEkae"
            style='background-image: url("/_next/static/images/7-9cf77193f77ae681342357681f44c2df.jpg");'
          ></div>
          <div
            class="Slider__Card-sc-f48522bf-4 iNCIpz"
            style='background-image: url("/_next/static/images/8-8db0f75252212c64caed277ce68f00ec.jpg");'
          ></div>
        </div>
      </div> */}
    </section>
  );
};
