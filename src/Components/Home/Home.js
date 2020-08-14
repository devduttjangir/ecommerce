import React from "react";
import { useEffect, useState } from "react";
import Post from "../Post";
import Right from "../Right";
import API from "../../HttpApi/API";

const Home = () => {
  // save news to state
  const [news, setNews] = useState([]);

  const fetchTrendingNews = async () => {
    const response = await API.get(
      "/top-headlines?country=in&apiKey=c1f4a901003948009f7e742d1de9a2f9&category=technology"
    );
    setNews(response.data.articles);
  };

  useEffect(() => {
    fetchTrendingNews();
  }, []);

  const renderPost = () => {
    return news.map((article) => {
      return (
        <div className="row">
          <div className="col">
            <Post
              postdate={article.publishedAt}
              title={article.title}
              imageurl={article.urlToImage}
              description={article.description}
            />
          </div>
        </div>
      );
    });
  };

  const categorySelected = (category) => {};

  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <div className="col-1"></div>
        <div className="col-8">
          {/* <div className="container"> */}
          {renderPost()}
        </div>
        <div className="col">
          <Right />
        </div>
      </div>
    </div>
  );
};
export default Home;
