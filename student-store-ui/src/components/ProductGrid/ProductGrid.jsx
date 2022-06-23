import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products, handleAddItemToCart = () => {}, handleRemoveItemToCart = () => {} }) => {
  return (
    <div className="product-grid">
      {/* {products.map((product, idx) => {
        <ProductCard showDescription={false} />;
      })} */}
    </div>
  );
};

export default ProductGrid;
