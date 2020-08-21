import React, { useState } from "react";

const InputMessage = (props) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessagePressed = () => {
    props.handleMessageSend(message);
    setMessage("");
  };

  return (
    <div className="bg-light border border-primary p-2">
      <div className="input-group">
        <input
          type="text"
          name="inputMessage"
          className="form-control"
          value={message}
          placeholder="Enter Message ..."
          onChange={(event) => handleInputChange(event)}
        />
        <div class="input-group-append">
          <button
            className="btn btn-primary text-light btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => sendMessagePressed()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default InputMessage;
