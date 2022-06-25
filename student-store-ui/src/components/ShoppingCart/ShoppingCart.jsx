import React from "react";
import "./ShoppingCart.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const ShoppingCart = ({ isOpen, products, shoppingCart }) => {
  return (
    <div className={isOpen ? "shopping-cart cart-table" : "shopping-cart close"}>
      <div className="cart-table">
        <h4>
          Shopping Cart
          <ShoppingCartIcon style={{ marginLeft: "3rem" }} />
        </h4>
        <div className="header">
          <div className="header-row">
            <span>Name</span>
            <span>Quantity</span>
            <span>Unit Price</span>
            <span>Cost</span>
          </div>
        </div>
        <div className="product-row">
          <span>hey</span>
          <span>hey</span>
          <span>hey</span>
          <span>hey</span>
        </div>
        <div className="receipt">
          <div className="receipt-subtotal">
            <span className="subtotal">Subtotal</span>
            <span></span>
            <span></span>
            <span>/addition/subtotal#</span>
          </div>
          <div className="receipt-taxes">
            <span className="subtotal">Taxes</span>
            <span></span>
            <span></span>
            <span>/taxes#</span>
          </div>
          <div className="receipt-total">
            <span className="subtotal">Total</span>
            <span></span>
            <span></span>
            <span>/total#</span>
          </div>
        </div>
      </div>
      <CheckoutForm />
      {/* <p>//conditional code</p> */}
    </div>
  );
};

export default ShoppingCart;
