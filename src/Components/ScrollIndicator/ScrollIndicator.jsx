import React, { useState, Fragment, useEffect } from "react";
import styles from "./ScrollIndicator.module.css";

export const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = Scrolled / MaxHeight;
    setScroll(document.documentElement.scrollWidth * ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);

  return (
   
      <div className={styles.Container}>
        <div
          className={styles.ProgressBar}
          style={{
            width: `${scroll}px`,
          }}
        ></div>
      </div>

  );
};
