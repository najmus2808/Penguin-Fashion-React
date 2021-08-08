import React from "react";
import "./Header.css";
import img from '../../images/Penguin.png';

function Header() {
  return (
    <section className="head-sec" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 pe-lg-5">
            <img src={img} alt="shoe" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-12 ps-lg-5 my-auto text-lg-start text-center">
            <h1 id="h">NIKE REACT</h1>
            <h1>INFINITY RUN 2</h1>
            <p>
              The shoe looked modern, and we were excited to run in it. I was
              actually hashtag blessed enough to take my first pair of React
              Infinity to Nike
            </p>
            <button type="button" className="btn">
              <i className="fas fa-shopping-cart pe-2"></i>Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
