import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({ products, handleAddItemToCart = () => {}, handleRemoveItemToCart = () => {} }) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid />
      <Navbar />
      <Sidebar />
    </div>
  );
}
