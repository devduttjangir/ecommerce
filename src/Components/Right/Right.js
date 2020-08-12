import React from 'react';
import Popular from '../Popular';

const Right=()=>{
    const stories=[
        {title:"The blind man",postdate:"10 months ago in Lifestyle"},
        {title:"The blind man",postdate:"10 months ago in Lifestyle"},
        {title:"The blind man",postdate:"10 months ago in Lifestyle"},
        {title:"The blind man",postdate:"10 months ago in Lifestyle"},
        ]
const renderstories=()=>
{
    return stories.map( popular=>{
            return(
                <div className="row">
                    <div className="col">
                    <Popular title={popular.title} postdate={popular.postdate}/>
                    </div>
                </div>
            )
        }
        )
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
            <div className="row pt-4  border-top">
                <div className="col">
                {renderstories()}
                </div>
            </div>
        </div>
        
    )
}
export default Right;