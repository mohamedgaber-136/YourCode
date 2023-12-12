import React from "react";

const SectionLabel = ({ title, description }) => {
  return (
    <div className="my-3 mt-5 d-sm-flex justify-content-between align-items-center">
      <div className="col-sm-9 ">
        <h2 className="fw-bolder">{title}</h2>
        <p>{description}</p>
      </div>
      <button className="btn btn-light p-2 bg-body">View All</button>
    </div>
  );
};

export default SectionLabel;
