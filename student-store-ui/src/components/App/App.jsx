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
  const [subtotal, setSubtotal] = useState(0);

  //Fetching data products func
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
        // console.log(response.data);
        const data = await response?.data?.products;
        setProducts(data);
        setAllProducts(data);
      } catch {
        //  If request not complete successfully, set error
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

  let cart = {}; //pId = productId
  const handleAddItemToCart = (pId) => {
    // if (cart.hasOwnProperty(pId)) {
    //   cart[pId]++;
    // } else {
    //   cart[pId] = 1;
    // }
    // setShoppingCart([...shoppingCart]);
    // console.log(shoppingCart);

    let productAdded;
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === pId) {
        shoppingCart[i].quantity += 1;
        setShoppingCart([...shoppingCart]);
        let price = products.find((prod) => prod.id === pId).price + subtotal;
        setSubtotal(price).toFixed(2);
      }
    }
    productAdded = {
      itemId: pId,
      quantity: 1,
    };

    setShoppingCart([productAdded, ...shoppingCart]);
    let price = products.find((prod) => prod.id === pId).price + subtotal;
    setSubtotal(price).toFixed(2);
    console.log("pId", pId);
    console.log("PRODUCT ADDED", productAdded);
    console.log("CART", shoppingCart);
    console.log("SUBTOT", subtotal);
  };

  const handleRemoveItemFromCart = (pId) => {
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === pId) {
        if (shoppingCart[i].quantity != 1) {
          shoppingCart[i].quantity -= 1;
          setShoppingCart([...shoppingCart]);
          let price = subtotal - products.find((prod) => prod.id === pId).price;
          setSubtotal(price).toFixed(2);
        } else {
          shoppingCart.splice(i, 1);
          setShoppingCart([...shoppingCart]);
          let price = subtotal - products.find((prod) => prod.id === pId).price;
          setSubtotal(price).toFixed(2);
          console.log("deleted");
          console.log(shoppingCart);
        }
      }
    }
  };
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} products={products} shoppingCart={shoppingCart} subtotal={subtotal} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  allProducts={allProducts}
                  setProducts={setProducts}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  // quantity={quantity}
                />
              }
            />
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
