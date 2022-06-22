import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/aboutus">About Us</Link>
      </li>
      <li>
        {" "}
        <Link to="/contactus">Contact Us</Link>
      </li>
      <li>
        {" "}
        <Link to="">Buy Now</Link>
      </li>
      {/* <li to="/about">About Us</li>
      <li to="/">Contact Us</li>
      <li to="/">Buy Now</li> */}
    </nav>
  );
}
