import React from 'react';
import Post from '../Post';
const Right=props=>{
    const posts=[{postdate:"9 months ago in Journey",title:"How can we sing about love?"},
  {postdate:"9 months ago in Journey",title:"How can we sing about love?"},
  {postdate:"9 months ago in Journey",title:"How can we sing about love?"},
  {postdate:"9 months ago in Journey",title:"How can we sing about love?"}
  ]
  const renderpost=()=>{
    return posts.map(right=>{
      return(
        <div className="row">
          <div className="col">
          <Right postdate={right.postdate} title={right.title} />
          </div>
        </div>
      )
    })


  }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                About
                </div>
            </div>
            <div className="row pt-2">
                <div className="col">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum
                </div>
            </div>
            <div className="row pt-4">
                <div className="col">
        
                </div>
            </div>
            <div className="row pt-2 border-top">
                <div className="col pt-2">
                Tags
                </div>
            </div>
            <div className="row pt-4 pb-4">
                <div className="col">
                <button type="button" class="btn btn-secondary btn-sm">Journey</button><button type="button" class="btn btn-secondary btn-sm">Work</button>
<button type="button" class="btn btn-secondary btn-sm">Lifestype</button>
<button type="button" class="btn btn-secondary btn-sm">Photography</button><button type="button" class="btn btn-secondary btn-sm">Food and Drink</button>

                </div>
            </div>
            <div className="row pt-4  border-top">
                <div className="col">
                Popular stories
                </div>
            </div>
            <div className="row pt-2">
                <div className="col">
                {/* {props.title}
                </div>
            </div>
            <div className="row pt-2">
                <div className="col">
                <img src="https://milo.bootlab.io/img/articles/8.jpg"/>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col">
                {props.postdate} */}
                {renderpost()}
                </div>
            </div>
        </div>
    )
}
export default Right;