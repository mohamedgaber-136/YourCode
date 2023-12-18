import React from "react";
import "./MainProfile.css";
import { SidNavProfile } from "./SidNavProfile";
import { ProfileCover } from "./ProfileCover/ProfileCover";

export const MainProfile = () => {

  return (
    <div className="d-flex ">
      <SidNavProfile/>
      <ProfileCover />
    </div>
  );
};
