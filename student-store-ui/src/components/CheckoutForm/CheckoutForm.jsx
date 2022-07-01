import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  return (
    <div className="checkout-form">
      <div className="header">
        <h4>
          Payment Info <MonetizationOnIcon style={{ marginLeft: "3rem", fontSize: "1.5rem" }} />
        </h4>
      </div>
      <div className="inputs-form">
        <h4 className="name-form">Name</h4>
        <input className="name-input" type={"text"} placeholder="Student Name"></input>
        <h4 className="email-form">Email</h4>
        <input className="email-input" type={"email"} placeholder="student@codepath.org"></input>
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

export default CheckoutForm;

//check the slides from today 6/22 week 2 day 3!!
