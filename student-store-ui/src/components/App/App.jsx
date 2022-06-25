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

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("error");
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
    setIsOpen(!isOpen);
    console.log("OPPPPEEEEEN");
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

          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} products={products} />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* <Navbar /> */}
          {/* <Home /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
