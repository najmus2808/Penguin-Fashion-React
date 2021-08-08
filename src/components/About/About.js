import React from "react";
import image from "../../images/XMLID 1.png";
import "./About.css"

function About() {
  return (
    <section className="container about" id="about">
      <div className="row">
        <div className="col-lg-6 col-12 p-5">
          <h2 className="text-center">About Us</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit
            amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur
            adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum
            dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet,
            consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
            Lorem ipsum dolor.
          </p>
          <button type="button" className="btn btn-primary">
            See More
          </button>
        </div>
        <div className="col-lg-6 col-12 p-5">
          <img style={{ width: "100%" }} src={image} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default About;
