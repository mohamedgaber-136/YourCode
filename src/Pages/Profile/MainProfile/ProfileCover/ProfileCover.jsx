import React from "react";
import "./ProfileCover.css";
import img from "./Leonardo_Diffusion_XL_portrait_of_young_man_with_beard_3.jpg";
export const ProfileCover = () => {
  return (
    <div className="w-100  align-self-start">
      <div className="ProfileCoverImg bg-danger"></div>
      <div className="NameSection d-flex  align-items-center ">
        <div className="ProfileImg">
          <img src={img} alt="ProfileImg" />
        </div>
        <div className="accountData flex-column align-items-start  d-flex justify-content-center">
          <h3 className="text-center">Mohamed Gaber</h3>
          <h4 className="text-primary text-center">@FaceBook</h4>
          <h5 className="text-center text-secondary">@twitter</h5>
          <div className="d-flex justify-content-center gap-3 ">
            <div className="followers d-flex align-items-center gap-1">
              <span className=" bg-danger rounded-circle d-flex justify-content-center align-items-center NumbersSpans">14</span> <p className="m-0">following</p>
            </div>
            <div className="Following d-flex align-items-center gap-1">
              {" "}
              <span className="bg-success rounded-circle d-flex justify-content-center align-items-center NumbersSpans">17</span> <p className="m-0">followers</p>
            </div>
            <div className="icons"></div>
          </div>
        </div>
      </div>
      <div className="Bar bg-dark">bar</div>
    </div>
  );
};
