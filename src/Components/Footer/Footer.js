import React from "react";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container">
          <div className="row pt-4">
            <div className="col h4 text-center ">
            Subscribe to our newsletter
            </div>
          </div>
          <div className="row">
            <div className="col text-center ">
            Join our monthly newsletter and never miss out on new stories and promotions.
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-3"/>
            <div className="col">
              <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Email address" />
                  <div className="input-group-append">
                    <button className="btn btn-dark font-weight-bold" type="button" font-weight-bold>Subscribe</button>
                  </div>
              </div>

            </div>
            <div className="col-3"/>
            </div>
          

        </div>
      </div>
      <div className="jumbotron jumbotron-fluid ">
        <div className="container">
          <div className="row">
            <div className="col">
            <img src="https://milo.bootlab.io/post-image.html#"/>
            </div>
              <div className="col">
            <img src=""/>
            </div>
              <div className="col">
            <img src=""/>
            </div>
              <div className="col">
            <img src=""/>
            </div>
              <div className="col">
            <img src=""/>
            </div>
              <div className="col">
            <img src=""/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
