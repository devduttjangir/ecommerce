import React from "react";

const ChatHeader = (props) => {
  const chatDetails = {
    userName: "Lucy",
    imageurl: "https://milo.bootlab.io/img/avatars/3.png",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img
              src={chatDetails.imageurl}
              height="50px"
              alt=""
              className="rounded-circle border border-light"
            />
            <div className="pl-3 font-weight-bold text-light d-flex align-items-center">
              <span>{chatDetails.userName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;
