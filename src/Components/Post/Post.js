import React from 'react';
const Post=props=>{
    return (
        <div className="container">
            <div className="row pt-4 ">
                <div className="col display6 ">
                {props.postdate}
                </div>
            </div>
            <div className="row pt-2 pb-2">
                <div className="col h3">
                {props.title}
                </div>
            </div>
            <div className="row pt-4 pb-2">
                <div className="col">

                {/* <img src="https://milo.bootlab.io/img/articles/8.jpg"/> */}
                <img src={props.imageurl} width="100%"/>
                </div>
            </div>
            <div className="row pt-2 pb-4 border-bottom">
                <div className="col">
                {props.description}
                </div>
            </div>
        </div>
    )
}
export default Post;