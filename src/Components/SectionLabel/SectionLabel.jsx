import React from "react";

const SectionLabel = ({
  title,
  description,
  color,
  buttonText,
  buttonColor,
}) => {
  return (
    <div className="my-3 mt-5 d-sm-flex justify-content-between align-items-center">
      <div className="col-sm-9 ">
        <h2 className={`fw-bolder text-dark`}>{title}</h2>
        <p className={`text-dark`}>{description}</p>
      </div>
      <button className={`btn btn-outline-dark p-2`}>
        {buttonText}
      </button>
    </div>
  );
};

export default SectionLabel;
