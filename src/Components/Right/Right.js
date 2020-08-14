import React from "react";
import Popular from "../Popular";
import Tags from "../Tags";
const Right = () => {
  const stories = [
    {
      title: "The blind man",
      imageurl: "https://milo.bootlab.io/img/articles/2.jpg",
      postdate: "10 months ago in Lifestyle",
    },
    {
      title: "Crying on the news",
      imageurl: "https://milo.bootlab.io/img/articles/3.jpg",
      postdate: "1 year ago in Work",
    },
  ];
  const renderstories = () => {
    return stories.map((popular) => {
      return (
        <div className="row">
          <div className="col">
            <Popular
              title={popular.title}
              imageurl={popular.imageurl}
              postdate={popular.postdate}
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
          <Tags title="Business" />
          <Tags title="General" />
          <Tags title="Health" />
          <Tags title="Science" />
          <Tags title="Sports" />
          <Tags title="Entertainment" />
          <Tags title="Technology" />
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
