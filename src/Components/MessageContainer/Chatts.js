import React from "react"; 

const Chatts=(props)=>
{
    const renderchatts=()=>{
        return props.chatDetails.map((chatDetail)=>{
            return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <img src={chatDetail.imageUrl} height="50%"/>
                                </div>
                                <div className="col">
                                {chatDetail.userName}
                                </div>
                                <div className="col">
                                {chatDetail.postdate}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                {chatDetail.content}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
export default Chatts;
