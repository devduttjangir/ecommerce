import React from "react";
import Chatts from "./Chatts";
import ChatContacts from "./ChatContacts";
const MessageContainer=()=>{
    
     const contacts = [
    
      {title: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago"},
      {title: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago"},
      {title: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago"}
     ]
      const chatDetails = [
    
      {
      userName: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
      content:"hi....how are you"},
      {
      userName: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
      content:"hi....how are you"},
      {
      userName: "Lucy",
      imageurl: "https://milo.bootlab.io/img/avatars/3.png",
      postdate: "8 months ago",
      content:"hi....how are you"},


          ]

 
      
    
   
    return (
    
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-4">
                  <ChatContacts
              contacts={contacts}
              
            />
                </div>
                <div className="col">
                <Chatts chatDetails={chatDetails}/>
                </div>
            </div>
        </div>
        </React.Fragment>

    )
}
export default MessageContainer;