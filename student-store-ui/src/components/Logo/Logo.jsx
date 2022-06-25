import React from "react";
import { Link } from "react-router-dom";
// import "./assets";
import "./Logo.css";
// import { Location } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="logo"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"
        alt="codepath-logo"
      />
    </Link>
  );
};

export default Logo;
