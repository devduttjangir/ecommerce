import React from 'react';
import Post from '../Post';
import Right from '../Right';
const Home=()=>
{
  const posts=[{postdate:"9 months ago in Journey",title:"How can we sing about love?",description:"Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."},
  {postdate:"9 months ago in Journey",title:"How can we sing about love?",description:"Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."},
  {postdate:"9 months ago in Journey",title:"How can we sing about love?",description:"Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."},
  {postdate:"9 months ago in Journey",title:"How can we sing about love?",description:"Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."}
  ]
  const renderpost=()=>{
    return posts.map(post=>{
      return(
        <div className="row">
          <div className="col">
          <Post postdate={post.postdate} title={post.title} description={post.description}/>
          </div>
        </div>
      )
    })


  }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
          {renderpost()}
          </div>
           <div className="col-3">
          <Right/>
          </div>
        </div>
      </div>
    ) 
}
export default Home;