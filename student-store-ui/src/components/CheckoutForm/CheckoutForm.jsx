import React from "react";

const CheckoutForm = () => {
  return (
    <div>
      <h4>
        Payment Info <MonetizationOnIcon />{" "}
      </h4>
      <h4 style={{ fontWeight: "normal" }}>Name</h4>
      <input type={"text"} placeholder="Student Name"></input>
      <h4 style={{ fontWeight: "normal" }}>Email</h4>
      <input type={"email"} placeholder="student@codepath.org"></input>
      <input type={"checkbox"}></input>
      <label>I agree to the terms and conditions</label>
    </div>
  );
};

export default CheckoutForm;

//check the slides from today 6/22 week 2 day 3!!
