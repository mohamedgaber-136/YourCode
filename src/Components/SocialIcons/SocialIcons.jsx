import React from "react";
import "./SocialIcons.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export const SocialIcons = () => {
  return (
    <div class="social-links">
      <div id="twitter" class="social-btn flex-center">
        <FaTwitter size={24} />

        <span>@twitter</span>
      </div>

      <div id="linkedin" class="social-btn flex-center">
        <FaLinkedin size={24} />
        <span>@linkedin</span>
      </div>

      <div id="github" class="social-btn flex-center">
        <FaGithub size={24} />

        <span>@github</span>
      </div>
    </div>
  );
};
