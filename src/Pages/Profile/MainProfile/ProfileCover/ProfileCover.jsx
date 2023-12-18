import React from "react";
import "./ProfileCover.css";
import img from "./Leonardo_Diffusion_XL_portrait_of_young_man_with_beard_3.jpg";
import { Outlet} from 'react-router-dom'
export const ProfileCover = () => {
  const sampleQuestionData = [
    { total: 3, wrong: 3 },
    { total: 12, wrong: 3 },
    { total: 14, wrong: 3 },
    { total: 16, wrong: 3},
    { total: 6, wrong: 0 },
    // Add more data as needed
  ];
  return (
    <div className="profileMain  align-self-start">
      <div className="ProfileCoverImg bg-danger"></div>
      <div className="NameSection d-flex flex-column flex-md-row align-items-center    ">
        <div className="ProfileImg d-flex justify-content-center">
          <img src={img} alt="ProfileImg" />
        </div>
        <div className="accountData flex-column align-items-center align-items-md-start d-flex justify-content-center">
          <div className="AccountInfos  flex-column align-items-center align-items-md-start d-flex justify-content-center">
            <div className="d-flex align-items-center gap-md-2 flex-column flex-md-row">
          <h3 className="text-center">Mohamed Gaber</h3>
            <h5 className="text-center text-secondary">(I am frontend Developer)</h5>

            </div>
          <h4 className="text-primary text-center">@FaceBook </h4>
          <h5 className="text-center text-secondary">@twitter</h5>
          <h5 className="text-center text-secondary">joined @2023</h5>
          <div className="d-flex justify-content-center gap-3 ">
            <div className="followers d-flex align-items-center gap-1">
              <span className="bg  rounded-circle d-flex justify-content-center align-items-center NumbersSpans">
                14
              </span>{" "}
              <p className="m-0">following</p>
            </div>
            <div className="Following d-flex align-items-center gap-1">
              {" "}
              <span className="bg-light rounded-circle d-flex justify-content-center align-items-center NumbersSpans">
                17
              </span>{" "}
              <p className="m-0">followers</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="infos py-5">
      <div className=" container  h-100 d-flex align-items-center justify-content-center">
        <Outlet context={sampleQuestionData}/>
      </div>
      </div>

    </div>
  );
};
