import React from "react";
import ChatHeader from "./ChatHeader";
import InputMessage from "./InputMessage";
const Chatts = (props) => {
  const chatComponent = (chatDetail) => {
    return (
      <React.Fragment>
        <div className="container bg-secondary my-2">
          <div className="row">
            <div className="col">
              <div className="bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col py-2">
                      <div
                        className={`d-flex ${
                          chatDetail.isFromMe ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className="px-1">
                          <img src={chatDetail.imageurl} className="rounded-circle" height="50px" alt="" />
                        </div>
                        <div className="px-1">{chatDetail.content}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderChats = () => {
    return props.chatDetails.map((chatDetail) => {
      return chatComponent(chatDetail);
    });
  };
  return (
    <div className="d-flex flex-column" style={{ height: "600px" }}>
      <div className="bg-info py-2">
        <ChatHeader />
      </div>
      <div>{renderChats()}</div>
      <div className="mt-auto">
        <InputMessage />
      </div>
    </div>
  );
};
export default Chatts;
