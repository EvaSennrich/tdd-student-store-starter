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

  //useEffect calling the fethData func in first reload!
  useEffect(() => {
    //Fetching data from API func
    //  It should make a GET request to the API's /store endpoint with the axios.get method.
    const fetchData = async () => {
      try {
        const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
        // console.log(response.data);
        const data = await response?.data?.products;
        setProducts(data);
      } catch {
        //  If the request does not complete successfully, or there are no products found in the response, it should create an error message and store it in the error state variable.
        setError("no products found");
      }
    };
    fetchData();
  }, []);
  console.log(products);

  const handleOnToggle = () => {
    //  It should toggle the open/closed state of the Sidebar.
  };
  const handleAddItemToCart = (productId) => {
    //      It should accept a single argument - productId
    //  It should add that product to the shoppingCart if it doesn't exist, and set its quantity to 1.
    //  If it does exist, it should increase the quantity by 1.
    //  It should add the price of the product to the total price of the shoppingCart.
  };

  const handleRemoveItemFromCart = (productId) => {
    // When called...
    //  It should accept a single argument - productId
    //  It should decrease the quantity of the item in the shoppingCart by 1, but only if it already exists.
    //  If it doesn't exist, the function should do nothing.
    //  If the new quantity is 0, it should remove the item from the shoppingCart
  };

  const handleOnCheckoutForm = () => {};

  return (
    <div className="app">
      {/*  this helps to render/ call every single component */}
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Routes>
            <Route path="/" element={<Home products={products} />} />
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
