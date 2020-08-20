import React from "react";
import Chatts from "./Chatts";

const chatHeader=(props)=>{
     const chatDetails = [
    {
      userName: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      
    }
  ];

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={chatDetails.imageurl} height="50px" alt="" />
                </div>
                <div className="col">
                    {chatDetails.userName}
                </div>
            </div>
        </div>
    )
}
export default chatHeader;