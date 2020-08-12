import React from 'react';
const Popular=props=>{
    return(
        <div className="container-fluid">
            <div className=" pb-2">
                <div className="col">
                Popular stories
                </div>
            </div>
            <div className=" pb-2">
                <div className="col">
                {props.title}
                </div>
            </div>
            <div className=" pb-2">
                <div className="col">
                <img src="https://milo.bootlab.io/img/articles/2.jpg" width="100%"/>
                </div>
            </div>
            <div className=" pb-2">
                <div className="col">
                {props.postdate}
                </div>
            </div>

        </div>
    )
}
export default Popular;