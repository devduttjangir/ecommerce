import React from 'react';
const Comments=props=>
{
    return(
<div class="jumbotron jumbotron-fluid">
  <div class="container-fluid">
    <div className="row">
        <div className="col-2 text-center font-weight-bold">
        <img src={props.imageurl} class="rounded-circle"/>
        {props.title}
        </div>
        <div className="col">
        {props.description}
                <div className="container">
                    <div className="row">
                        <div className="col text-secondary">
                        {props.postdate}
                        </div>
                        <div className="col-2">
                         Reply
                        </div>
                    </div>
                </div>
        </div>
    </div>
   
  </div>
</div>

    )
}
export default Comments;