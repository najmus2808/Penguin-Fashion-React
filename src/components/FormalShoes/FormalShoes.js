import React from "react";
import formalData from "../../data/Formal";
import Card from "../Card/Card";

function FormalShoes() {
  return (
    <section className="container my-5" id="product">
      <h2 className="mb-4">FORMAL SHOES</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {formalData.map((item) => (
          <Card item={item} class={[" ", "nike", "price"]} />
        ))}
      </div>
    </section>
  );
}

export default FormalShoes;
