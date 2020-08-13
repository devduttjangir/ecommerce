import React from "react";
import Post from "../Post";
import Right from "../Right";
const Home = () => {
  const posts = [
    {
      postdate: "9 months ago in Journey",
      title: "How can we sing about love?",
      imageurl: "https://milo.bootlab.io/img/articles/8.jpg",
      description:
        "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    },
    {
      postdate: "10 months ago in Lifestyle",
      title: "Oh, I guess they have the blues",
      imageurl: "https://milo.bootlab.io/img/articles/22.jpg",
      description:
        "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    },
    {
      postdate: "1 year ago in Work",
      title: "How can we, how can we sing about ourselves?",
      imageurl: "https://milo.bootlab.io/img/articles/19.jpg",
      description:
        "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    },
    {
      postdate: "9 months ago in Lifestyle",
      title: "The king is made of paper",
      imageurl: "https://milo.bootlab.io/img/articles/3.jpg",
      description:
        "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    },
  ];
  const renderpost = () => {
    return posts.map((post) => {
      return (
        <div className="row">
          <div className="col">
            <Post
              postdate={post.postdate}
              title={post.title}
              imageurl={post.imageurl}
              description={post.description}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <div className="col-1"></div>
        <div className="col-8">
          {/* <div className="container"> */}
          {renderpost()}
        </div>
        <div className="col">
          <Right />
        </div>
      </div>
    </div>
  );
};
export default Home;
