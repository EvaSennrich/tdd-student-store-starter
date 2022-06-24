import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Logo />
        <SocialsLinks />
        <ul className="navBarLinks">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/buyNow">Buy Now</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

const SocialsLinks = () => {
  return (
    <div className="socialLinks">
      <ul>
        <li>
          <a href="https://twitter.com/codepath?lang=en">
            {" "}
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/codepathorg/?hl=en">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/codepath.org/">
            <FacebookIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

// const AboutUs = () => {
//   return <h1>HELOOOO</h1>;
// };
// const ContactUs = () => {
//   return <h1>HEeey</h1>;
// };
// const BuyNow = () => {
//   return <h1>Hiii</h1>;
// };
