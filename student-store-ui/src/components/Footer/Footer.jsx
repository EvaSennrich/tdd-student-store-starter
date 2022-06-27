import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="top">
          <div className="links">
            <div className="linkColumn">
              <h4>Categories</h4>
              <ul>
                <li>All Categories</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Accessories</li>
                <li>Tech</li>
              </ul>
            </div>
            <div className="linkColumn">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Find Store</li>
                <li>Terms</li>
                <li>Sitemap</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="linkColumn">
              <h4>Support</h4>
              <ul>
                <li>Contact Us</li>
                <li>Money refund</li>
                <li>Order Status</li>
                <li>Shipping Info</li>
                <li>Open Dispute</li>
              </ul>
            </div>
            <div className="linkColumn">
              <h4>Account</h4>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Account Setting</li>
                <li>My Orders</li>
                <li>Orders</li>
              </ul>
            </div>
            <div className="linkColumn"></div>
            <div className="linkColumn"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
