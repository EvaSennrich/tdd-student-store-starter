import * as React from "react";
import "./Sidebar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCardIcon from "@mui/icons-material/AddCard";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  setShoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  subtotal,
}) {
  return (
    <section className={isOpen ? "sidebar open" : "sidebar close"}>
      <div className="wrapper">
        <button className={isOpen ? "toggle-button button open" : "toggle-button button close"} onClick={handleOnToggle}>
          <MenuIcon />
        </button>
        <div className="shopping-cart">
          <div className={isOpen ? "shopping-cart cart-icons open" : "shopping-cart cart-icons"}>
            <span>
              <AddShoppingCartIcon style={{ color: "white", fontSize: "2rem" }} />
            </span>
            <span>
              {" "}
              <MonetizationOnIcon style={{ color: "white", fontSize: "2rem" }} />
            </span>
            <span>
              {" "}
              <AddCardIcon style={{ color: "white", fontSize: "2rem" }} />
            </span>
          </div>
        </div>
      </div>
      <ShoppingCart isOpen={isOpen} products={products} subtotal={subtotal} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      {/* <CheckoutForm /> */}
    </section>
  );
}
