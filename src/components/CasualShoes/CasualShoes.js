import React from "react";
import Card from "../Card/Card";
import casualData from "../../data/Casual";

function CasualShoes() {
  return (
    <section className="container my-5" id="product">
      <h2 className="mb-4">CASUAL SHOES</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {casualData.map((item) => (
          <Card item={item} class={["imgCard1", "nike", "price"]} />
        ))}
      </div>
    </section>
  );
}

export default CasualShoes;
