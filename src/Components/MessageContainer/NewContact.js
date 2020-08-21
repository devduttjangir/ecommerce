import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showContactScreen } from "../../Redux/Action";
const NewContact=(props)=>
{
    
    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.showContactModal);
    const newContactModal=()=>{
    return(
        <div
      onClick={() => dismissModal()}
      className={`modal fade  ${showModal ? "show" : ""}`}
      style={{
        display: `${showModal ? "block" : "none"}`,
        backgroundColor: "rgba(10, 10, 10, 0.6)",
      }}
      id="WelcomeModal"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        data-backdrop="static"
      >
        <div className="modal-content">
          <div className="modal-header">
            <div className="camera-box">
              <img alt="" src="/img/yellow-logo.svg" />
              <h5 className="modal-title" id="exampleModalLabel">
                Welcome to the Cozy App!
              </h5>
            </div>
          </div>
          <div className="modal-body">heeeee</div>
        </div>
      </div>
    </div>
    )
}
    
    const dismissModal = () => {
    dispatch(showContactScreen(false));
      };
        return (<React.Fragment>
            {newContactModal()}
            </React.Fragment>
    )
}

export default NewContact;