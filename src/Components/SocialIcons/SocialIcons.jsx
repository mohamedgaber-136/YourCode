import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import styles from "./SocialIcons.module.css";

export const SocialIcons = () => {
  return (
    // <div className="social-links">
    <div className={styles.socialLinks}>
      {/* <div className="social-btn flex-center twitter"> */}
      <div
        className={`${styles.twitter} ${styles.socialBtn} ${styles.flexCenter}`}
      >
        <FaTwitter size={24} />

        <span>@twitter</span>
      </div>

      <div
        className={`${styles.linkedin} ${styles.socialBtn} ${styles.flexCenter}`}
      >
        <FaLinkedin size={24} />
        <span>@linkedin</span>
      </div>

      <div
        className={`${styles.github} ${styles.socialBtn} ${styles.flexCenter}`}
      >
        <FaGithub size={24} />

        <span>@github</span>
      </div>
    </div>
  );
};
