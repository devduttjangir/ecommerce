import React from "react";
import Chatts from "./Chatts";
import ChatContacts from "./ChatContacts";
const MessageContainer = () => {
  const contacts = [
    {
      title: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
    },
    {
      title: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
    },
    {
      title: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
    },
  ];
  const chatDetails = [
    {
      userName: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
      content: "hi....how are you",
      isFromMe: false,
    },
    {
      userName: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
      content: "hi....how are you",
      isFromMe: true,
    },
    {
      userName: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
      content: "hi....how are you",
      isFromMe: false,
    },
  ];

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-0 border-right ">
            <ChatContacts contacts={contacts} />
          </div>
          <div className="col p-0 bg-secondary" style={{ height: "670px" }}>
            <Chatts chatDetails={chatDetails} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MessageContainer;
