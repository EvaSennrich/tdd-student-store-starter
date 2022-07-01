import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavBar from "../SubNavBar/SubNavBar";
import { useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import SearchIcon from "@mui/icons-material/Search";

const Home = ({ products, handleAddItemToCart, handleRemoveItemFromCart, setProducts, allProducts }) => {
  const [searchItem, setSearchItem] = useState("");

  //Func search for item in searchBar input tag
  const searchForItem = (e) => {
    console.log("----->", e);
    setSearchItem(e.target.value);
  };

  // filtering products array, lower casing them and checking if stateVar "searchItem" inputted by user is included in the array
  let searchProducts = products.filter((e) => {
    return e.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div className="home">
      <Hero />
      <div className="searchBar-div">
        <input type="text" className="searchBar" value={searchItem} placeholder="search" onChange={searchForItem} />
        {/* onChange={(e) => setInputText(e.target.value)} */}
        <SearchIcon className="searchIcon" />
      </div>
      <SubNavBar products={allProducts} setProducts={setProducts} allProducts={allProducts} />
      <ProductGrid
        products={searchProducts}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        // shopppingCart={shopppingCart}
      />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
