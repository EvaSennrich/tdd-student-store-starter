import React from "react";

const Receipt = ({ emailInput, nameInput, shoppingCart, subtotal }) => {
  return (
    <div className="receipt-div">
      <header>
        <h4>Receipt</h4>
      </header>
      <section>
        <p>
          Showing receipt for {nameInput} available at {emailInput}:
        </p>
        <ul className="receipt-items">
          <li>{shoppingCart}</li>
          <li>Before taxes, the subtotal was {subtotal}</li>
          <li></li>
        </ul>
      </section>
    </div>
  );
};

export default Receipt;
