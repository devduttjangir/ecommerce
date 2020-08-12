import React from "react";
import Routes from "../../Utility/Routes";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Miro
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to={Routes.home.path}>{Routes.home.title}</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to={Routes.about.path}>{Routes.about.title}</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to={Routes.posts.path}>{Routes.posts.title}</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to={Routes.contact.path}>{Routes.contact.title}</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
