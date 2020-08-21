import React from "react";
const ChatContacts = (props) => {
  const rendercontacts = () => {
    return props.contacts.map((contact) => {
      return (
        <li class="list-group-item">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img src={contact.imageurl} className="rounded-circle" height="50px" />
              </div>
              <div className="col">
                <div className="container">
                  <div className="row">
                    <div className="col">{contact.title}</div>
                  </div>
                  <div className="row">
                    <div className="col">{contact.postdate}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  };
  return (
    <ul class="list-group list-group-flush overflow-auto">
      {rendercontacts()}
      {rendercontacts()}
      {rendercontacts()}
      {rendercontacts()}
    </ul>
  );
};
export default ChatContacts;
