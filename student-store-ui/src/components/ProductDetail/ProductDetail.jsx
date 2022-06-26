import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ product, handleItemTocart, handleRemoveItemToCart }) => {
  //UseParams() is changing the /:productId from the App.jsx <BrowserRouter/> to the ID of whatever prouct you clicked and then subtract -1 because array indexes start in 0:
  console.log("detail prod", useParams());
  return (
    <div className="product-detail-cont">
      <div className="product-header">
        <h2 className="product-name">{` Product ${product[useParams().productId - 1]} : ${product[useParams().productId - 1].name}`}</h2>
      </div>
      <div className="detail-image-cont">
        <img className="detail-image" src={product[useParams().productId - 1].image} alt={product[useParams().productId - 1].name + " image"} />
      </div>
      <div className="product-description">
        <p>{product[useParams().productId - 1].description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
