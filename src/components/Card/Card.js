import React from "react";

function Card(props) {
  const { image, name, description, price } = props.item;
  return (
    <div classNameName="card h-100 border-0 shadow nike">
      <div className="imgCard1 p-3">
        <img src={image} className="card-img-top" alt="shoe" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          {description}
        </p>
        <div className="d-flex justify-content-between">
          <h3 id="price">${price}</h3>
          <button type="button" className="btn">
            <i className="fas fa-shopping-cart pe-2"></i>Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
