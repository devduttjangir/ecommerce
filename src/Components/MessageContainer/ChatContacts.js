import React from "react";
const ChatContacts = (props) => {
  const rendercontacts = () => {
    return props.contacts.map((contact) => {
      return (
        <li class="list-group-item">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img
                  src={contact.imageurl}
                  className="rounded-circle"
                  height="50px"
                />
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
    <div className="container">
      <div className="row bg-info">
        <div className="col d-flex py-3 mb-2 justify-content-between">
          <div>Contacts</div>
          <div className="border border-light px-1">+</div>
        </div>
      </div>
      <div className="row overflow-auto" style={{ height: "600px" }}>
        <div className="col">
          <ul class="list-group list-group-flush overflow-auto">
            {rendercontacts()}
            {rendercontacts()}
            {rendercontacts()}
            {rendercontacts()}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ChatContacts;
