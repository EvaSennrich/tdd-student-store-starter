import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutDiv">
      <div className="aboutContent">
        <h3>About Us</h3>
        <div className="summary">
          <div className="info">
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p>
              We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
            </p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </div>
          <div className="logoMedia">
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"
              alt="codepath large"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
