import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./CheckoutForm.css";
import { useState } from "react";
import axios from "axios";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const CheckoutForm = ({ isOpen, shoppingCart, checkoutForm, handleOnSubmitCheckoutForm, setShoppingCart }) => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const handleEmailInputOnChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleNameInputOnChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleOnCheckoutClick = () => {
    console.log("CLICKED?");
    var userInfo = {
      name: nameInput,
      email: emailInput,
    };
    axios.post(`http://localhost:3001/store`, {
      shoppingCart: shoppingCart,
      user: userInfo,
    });

    setShoppingCart([]);
    document.querySelector("#email-Input").value = "";
    document.querySelector("#name-Input").value = "";
  };

  return (
    <div className="checkout-form">
      <div className="header">
        <h4>
          Payment Info
          <MonetizationOnIcon style={{ marginLeft: "2.7rem", fontSize: "1.7rem" }} />
        </h4>
      </div>
      <div className="inputs-form">
        <h4 className="name-form">Name</h4>
        <input id="name-Input" name="name" type="text" className="checkout-form-input" placeholder="Student Name" onChange={handleNameInputOnChange}></input>
        <h4 className="email-form">Email</h4>
        <input
          id="email-Input"
          className="checkout-form-input"
          type="email"
          name="email"
          placeholder="student@codepath.org"
          onChange={handleEmailInputOnChange}
        ></input>
      </div>
      <div className="consent">
        <input className="checkBox" type={"checkbox"}></input>
        <label>I agree to the terms and conditions</label>
      </div>
      <div className="checkout-btn-div">
        {" "}
        <button className="checkout-btn" disabled={shoppingCart?.length ? false : true} onClick={handleOnCheckoutClick}>
          Checkout
        </button>
      </div>
      <div className="checkout-success">
        <h3>
          Checkout Info
          <FactCheckIcon style={{ marginLeft: "2.7rem", fontSize: "1.7rem" }} />
        </h3>
      </div>
      <div className="content-checkout">
        <p>
          A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm
          room.
        </p>
      </div>
    </div>
  );
};
//The first input should have:
//  the type prop set to email
//  the name prop set to email
//  the placeholder prop set to student@codepath.org
//  the value prop set by checkoutForm.email.
//  a valid onChange prop that uses the handleOnCheckoutFormChange function to update the checkoutForm state
//  The second input should have:
//  the type prop set to text
//  the name prop set to name
//  the placeholder prop set to Student Name
//  the value prop set by checkoutForm.name.
//  a valid onChange prop that uses the handleOnCheckoutFormChange function to update the checkoutForm state

export default CheckoutForm;

//check the slides from today 6/22 week 2 day 3!!
