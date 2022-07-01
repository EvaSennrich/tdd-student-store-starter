import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductGrid = ({ products }) => {
  const [shoppingCart, setShoppingCart] = useState({});
  const [productID, setProductID] = useState("");
  //=============================================================================
  //pid = productId
  let cart = {};
  const handleAddItemToCart = (pid) => {
    if (cart.hasOwnProperty(pid)) {
      cart[pid]++;
    } else {
      cart[pid] = 1;
    }
    setShoppingCart([cart, ...shoppingCart]);
    console.log(shoppingCart);
  };

  const handleRemoveItemFromCart = (pid) => {
    shoppingCart.map((item, index) => {
      let newShopppingCart = [];

      item.id === pid ? (newShopppingCart[index].quantity -= 1) : null;
      setShoppingCart([...shoppingCart]);
      console.log("ERROR");
    });
    console.log(pid);
  };

  const showDescription = () => {
    <Link to={"/products/" + products[0].id} state={{ product: products[0] }}>
      go to product
    </Link>;
    console.log("clickeed");
  };

  return (
    <div className="product-grid">
      {products.map((product, idx) => (
        <div key={idx}>
          <ProductCard
            showDescription={showDescription}
            product={product}
            // quantity={quantity}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
