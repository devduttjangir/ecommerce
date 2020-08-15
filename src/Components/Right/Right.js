import React from "react";
import Popular from "../Popular";
import Tags from "../Tags";
const Right = (props) => {
  
  const renderstories = () => {
    return props.popularNews.map((popular) => {
      return (
        <div className="row">
          <div className="col">
            <Popular
              title={popular.title}
              imageurl={popular.urlToImage}
              postdate={popular.publishedAt}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col h4">About</div>
      </div>
      <div className="row pt-2 ">
        <div className="col">
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
          quam semper libero, sit amet adipiscing sem neque sed ipsum
        </div>
      </div>
      <div className="row pt-4 border-bottom ">
        <div className="col"></div>
      </div>
      <div className="row pt-4 ">

        <div className="col pt-2 h4">Category</div>
      </div>
      <div className="row pt-2 pb-4">
        <div className="col">
          <Tags title="Business" tagSelected={props.categorySelected} isSelected={"Business"===props.selectedCategory} />
          <Tags title="General" tagSelected={props.categorySelected} isSelected={"General"===props.selectedCategory}/>
          <Tags title="Health" tagSelected={props.categorySelected} isSelected={"Health"===props.selectedCategory}/>
          <Tags title="Science" tagSelected={props.categorySelected} isSelected={"Science"===props.selectedCategory}/>
          <Tags title="Sports" tagSelected={props.categorySelected} isSelected={"Sports"===props.selectedCategory}/>
          <Tags title="Entertainment" tagSelected={props.categorySelected} isSelected={"Entertainment"===props.selectedCategory}/>
          <Tags title="Technology"  tagSelected={props.categorySelected} isSelected={"Technology"===props.selectedCategory}/>

        </div>
      </div>
      <div className="row pt-4  border-top">
        <div className="col h4">Popular Stories</div>
      </div>
      <div className="row pt-2">
        <div className="col p-0">{renderstories()}</div>
      </div>
    </div>
  );
};
export default Right;
