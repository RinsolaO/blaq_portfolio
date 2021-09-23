import React from "react";

const CaseCardText = (props) => {
  return (
    <div className="card-text-flex">
      <h4 className="card-text-title">
        {" "}
        {props.title} <br /> {props.title2}
      </h4>
      <span className="card-text-description"> {props.description}</span>
    </div>
  );
};

export default CaseCardText;
