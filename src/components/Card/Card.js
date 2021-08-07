import React from "react";
import "./Card.css";

function Card(props) {
  const { image, name, description, price } = props.item;
  return (
    <div className="col col-md-6 col-lg-4">
      <div className={`card border-0 shadow ${props.class[1]}`}>
        <div className={`${props.class[0]} p-3`}>
          <img src={image} className="card-img-top" alt="shoe" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between">
            <h3 id={props.class[2]}>{price}</h3>
            <button type="button" className="btn">
              <i className="fas fa-shopping-cart pe-2"></i>Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
