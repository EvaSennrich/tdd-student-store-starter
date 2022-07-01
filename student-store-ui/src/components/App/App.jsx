import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ListItem } from "@mui/material";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";

export default function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("error");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  //useEffect calling the fethData func in first reload!
  useEffect(() => {
    //Fetching data from API func
    //  It should make a GET request to the API's /store endpoint with the axios.get method.
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
        // console.log(response.data);
        const data = await response?.data?.products;
        setProducts(data);
        setAllProducts(data);
      } catch {
        //  If request not complete successfully, set error func
        setError(error);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
    console.log("OPPPPEENEED");
  };

  // const handleAddItemToCart = (pid) => {
  //   let newShopppingCart = [];
  //   shoppingCart.map((item, index) => {
  //     item.id === productId ? (newShopppingCart[index].quantity += 1) : null;
  //     setShoppingCart([...shoppingCart]);
  //     console.log("ERROR");
  //   });
  //   return "hello";
  //   console.log(pid);
  // };

  // const handleRemoveItemFromCart = (pid) => {
  //   shoppingCart.map((item, index) => {
  //     let newShopppingCart = [];

  //     item.id === productId ? (newShopppingCart[index].quantity -= 1) : null;
  //     setShoppingCart([...shoppingCart]);
  //     console.log("ERROR");
  //   });
  //   console.log(pid);
  // };

  // const handleOnCheckoutForm = () => {};

  return (
    <div className="app">
      {/*  this helps to render/ call every single component */}
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} products={products} />
          <Routes>
            <Route path="/" element={<Home products={products} allProducts={allProducts} setProducts={setProducts} />} />
            <Route path="/products/:productId" element={<ProductDetail product={products} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
