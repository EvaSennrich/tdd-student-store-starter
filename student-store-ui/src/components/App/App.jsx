import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

export default function App() {
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
