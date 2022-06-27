import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactDiv">
      <div className="contactContent">
        <h3>Contact Us</h3>
        <div className="contactSummary">
          <ul className="contactInfo">
            <li>
              <span>Email:</span>
              <span>code@path.org</span>
            </li>
            <li>
              <span>Phone:</span>
              <span>786-codepath</span>
            </li>
            <li>
              <span>Address:</span>
              <span>123 Street San Francisco, CA</span>
            </li>
          </ul>
          <div className="contactMedia">
            <img src="https://elitevisioncare.com/wp-content/uploads/2021/11/uioli-2021-header.jpg" alt="codepath large"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
