import React from "react";
const Tags = (props) => {
  const tagSelected=(title)=>{
    console.log(title);
    props.tagSelected(title);
  }
  let tagClass=props.isSelected ? "badge badge-success mx-1":"badge badge-light mx-1"
  return <a  href="#" onClick={()=>tagSelected(props.title)} className={tagClass}>{props.title}</a>;
};
export default Tags;
