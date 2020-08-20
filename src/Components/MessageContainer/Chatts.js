import React from "react";
import chatHeader from "./chatHeader";

const Chatts = (props) => {
  const chatComponent = (chatDetail) => {
    return (<React.Fragment>
        <div><chatHeader/></div>

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
                        <img src={chatDetail.imageurl} height="50px" alt="" />
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
  return <div>{renderChats()}</div>;
};
export default Chatts;
