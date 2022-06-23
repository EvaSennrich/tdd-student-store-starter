import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("error");
  //   shoppingCart - should store state for the active user's shopping cart (items they want to purchase and the quantity of each item).
  //  Use whatever data type works best here, but make sure the format the shoppingCart as an array before passing it to other components.
  //  When passed down to other components as a prop, it should formatted as an array of objects.
  //  Each object in the array should have two fields:
  //  The itemId field should store the id of the item being purchased.
  //  The quantity field should store a number representing how many of that item the user is purchasing.
  //  checkoutForm - the user's information that will be sent to the API when they checkout.
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  //Fetching data from API func
  //  It should make a GET request to the API's /store endpoint with the axios.get method.
  const fetchData = async () => {
    try {
      const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
      // console.log(response.data);
      setProducts(response.data);
      console.log(products);
    } catch {
      //  If the request does not complete successfully, or there are no products found in the response, it should create an error message and store it in the error state variable.
      // setError("no products found");
      console.log(error);
    }
  };

  //useEffect calling the fethData func in first reload!
  useEffect(() => {
    fetchData();
  }, []);

  const handleOnToggle = () => {
    //  It should toggle the open/closed state of the Sidebar.
  };
  const handleAddItemToCart = () => {};

  return (
    <div className="app">
      {/*  this helps to render/ call every single component */}
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Home />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/buyNow" element={<BuyNow />} /> */}
            {/* <Route path="navbar" element={<Navbar />} /> */}
          </Routes>

          {/* <Navbar />
          <Sidebar />
          <Home /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
