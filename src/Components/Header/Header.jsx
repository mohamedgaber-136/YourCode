import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center headerParent ">
      <div className="headerChild">
        <div className="d-flex justify-content-center align-items-center gap-3 ">
        <i className="fa-solid fa-bolt text-warning bg-dark p-2 rounded-circle"></i>
        <h2 className="m-0 text-center"><span className="text-warning">Unlock</span> Your Creative Potential</h2>
        </div>
        <h5 className="m-0 text-center">with Online Design and Development Courses.</h5>
        <h6 className="m-0 text-center">Learn from Industry Experts and Enhance Your Skills.</h6>
        <div className="d-flex">
            <button className="btn btn-warning buttonsWithoutBorderRight">explore Courses</button>
            <button className="btn btn-dark buttonsWithoutBorderLeft ">view Pricing</button>
        </div>
      </div>
      
    </div>
  );
};
