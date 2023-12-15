import React from "react";

const SectionLabel = ({ title, description, color, buttonText }) => {
  return (
    <div className="my-3 mt-5 d-sm-flex justify-content-between align-items-center">
      <div className="col-sm-9 ">
        <h2 className={`fw-bolder text-${color}`}>{title}</h2>
        <p className={`text-${color}`}>{description}</p>
      </div>
      <button className="btn btn-light p-2 bg-body">{buttonText}</button>
    </div>
  );
};

export default SectionLabel;
