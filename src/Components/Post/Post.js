import React from 'react';
const Post=props=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                {props.postdate}
                </div>
            </div>
            <div className="row">
                <div className="col">
                {props.title}
                </div>
            </div>
            <div className="row">
                <div className="col">

                {/* <img src="https://milo.bootlab.io/img/articles/8.jpg"/> */}
                <img src={props.imageurl}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                {props.description}
                </div>
            </div>
        </div>
    )
}
export default Post;