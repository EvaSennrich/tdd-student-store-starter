import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavBar from "../SubNavBar/SubNavBar";
import { useState } from "react";

export default function Home({ products, handleAddItemToCart, handleRemoveItemToCart, searchForItem, setProducts, allProducts }) {
  return (
    <div className="home">
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <Hero />
      <SubNavBar searchForItem={searchForItem} products={allProducts} setProducts={setProducts} />
      <ProductGrid products={products} />
    </div>
  );
}
