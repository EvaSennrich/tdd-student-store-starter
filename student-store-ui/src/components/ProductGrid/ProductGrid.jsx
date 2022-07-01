import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemFromCart, quantity }) => {
  // const [shoppingCart, setShoppingCart] = useState([]);
  // const [subtotal, setSubtotal] = useState("");
  // const [productID, setProductID] = useState("");
  // //===========================================================================

  // let cart = {}; //pId = productId

  // const handleAddItemToCart = (pId) => {
  //   // if (cart.hasOwnProperty(pId)) {
  //   //   cart[pId]++;
  //   // } else {
  //   //   cart[pId] = 1;
  //   // }
  //   // setShoppingCart([...shoppingCart]);
  //   // console.log(shoppingCart);

  //   let productAdded;
  //   for (var i = 0; i < shoppingCart.length; i++) {
  //     if (shoppingCart[i].itemId === pId) {
  //       shoppingCart[i].quantity += 1;
  //       setShoppingCart([...shoppingCart]);
  //       let price = products.find((prod) => prod.id === pId).price + subtotal;
  //       setSubtotal(price);
  //     }
  //   }
  //   productAdded = {
  //     productId: pId,
  //     quantity: 1,
  //   };
  //   setShoppingCart([productAdded, ...shoppingCart]);
  //   let price = products.find((prod) => prod.id === pId).price + subtotal;
  //   setSubtotal(price);
  //   console.log("pId", pId);
  //   console.log("PRODUCT ADDED", productAdded);
  //   console.log("CART", shoppingCart);
  //   console.log("SUBTOT", subtotal);
  // };

  // const handleRemoveItemFromCart = (pId) => {
  //   for (var i = 0; i < shoppingCart.length; i++) {
  //     if (shoppingCart[i].itemId === pId) {
  //       if (shoppingCart[i].quantity != 1) {
  //         shoppingCart[i].quantity -= 1;
  //         setShoppingCart([...shoppingCart]);
  //         let price = products.find((prod) => prod.id === pId).price - subtotal;
  //         setSubtotal(price);
  //       } else {
  //         shoppingCart.splice(i, 1);
  //         setShoppingCart([...shoppingCart]);
  //         let price = products.find((prod) => prod.id === pId).price - subtotal;
  //         setSubtotal(price);
  //         console.log("deleted");
  //         console.log(shoppingCart);
  //         // console.log("PRODUCT ADDED", productAdded);
  //       }
  //     }
  //   }
  // };

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
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            quantity={quantity}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
