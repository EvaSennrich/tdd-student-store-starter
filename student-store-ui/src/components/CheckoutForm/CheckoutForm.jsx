import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./CheckoutForm.css";
import { useState } from "react";

const CheckoutForm = ({ isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="checkout-form">
      <div className="header">
        <h4>
          Payment Info <MonetizationOnIcon style={{ marginLeft: "2.7rem", fontSize: "1.7rem" }} />
        </h4>
      </div>
      <div className="inputs-form">
        <h4 className="name-form">Name</h4>
        <input className="checkout-form-input" placeholder="Student Name"></input>
        <h4 className="email-form">Email</h4>
        <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" value={email}></input>
      </div>
      <div className="consent">
        <input className="checkBox" type={"checkbox"}></input>
        <label>I agree to the terms and conditions</label>
      </div>
      <div className="checkout-btn-div">
        {" "}
        <button className="checkout-btn">Checkout</button>
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
