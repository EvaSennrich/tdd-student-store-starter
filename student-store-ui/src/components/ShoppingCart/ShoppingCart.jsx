import React from "react";
import "./ShoppingCart.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const ShoppingCart = ({ isOpen, products, shoppingCart }) => {
  // let subotal = Math.round()

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
        {shoppingCart
          ? shoppingCart.map((item, idx) => (
              <div className="product-row" key={idx}>
                <span>{products.find((prod) => prod.id === item.itemId).name}</span>
                <span>{products.quantity}</span>
                <span>{"$" + products.find((prod) => prod.id === item.itemId).price}</span>
                <span>{"$" + item.quantity * products.find((prod) => prod.id === item.itemId).price}</span>
              </div>
            ))
          : null}
        <div className="receipt">
          <div className="receipt-subtotal">
            <span className="subtotal">Subtotal</span>
            <span></span>
            <span></span>
            {/* <span>{"$" + subTotal}</span> */}
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
