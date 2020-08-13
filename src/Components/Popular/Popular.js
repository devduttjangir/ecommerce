import React from "react";
const Popular = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col h6">{props.title}</div>
      </div>
      <div className="row">
        <div className="col">
          <img src={props.imageurl} width="100%" />
        </div>
      </div>
      <div className="row pb-4">
        <div className="col">{props.postdate}</div>
      </div>
    </div>
  );
};
export default Popular;
