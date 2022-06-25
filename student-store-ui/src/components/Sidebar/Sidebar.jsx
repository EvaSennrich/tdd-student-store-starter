import * as React from "react";
import "./Sidebar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";

// import { Checkbox } from "@mui/material";
// import Link from "@mui/material";

export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
  // const handleOnToggle = () => {
  //   setIsOpen(!isOpen);
  //   console.log("OPPPPEEEEEN");
  // };
  return (
    <section className={isOpen ? "sidebar open" : "sidebar close"}>
      <div className="buttonDiv">
        <button className="toggle-button" onClick={handleOnToggle}>
          <MenuIcon />
        </button>
      </div>
      {/* <p>//conditional code</p> */}
    </section>
  );
}
