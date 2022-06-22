import * as React from "react";
import "./Sidebar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";
// import { Checkbox } from "@mui/material";
// import Link from "@mui/material";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <button className="t">
        <MenuIcon />
      </button>
      <h4>
        Shopping Cart <ShoppingCartIcon />{" "}
      </h4>
      <p>//conditional code</p>
      <h4>
        Payment Info <MonetizationOnIcon />{" "}
      </h4>
      <h4 style={{ fontWeight: "normal" }}>Name</h4>
      <input type={"text"} placeholder="Student Name"></input>
      <h4 style={{ fontWeight: "normal" }}>Email</h4>
      <input type={"email"} placeholder="student@codepath.org"></input>
      <input type={"checkbox"}></input>
      <label>I agree to the terms and conditions</label>
    </section>
  );
}
