import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemToCart }) => {
  console.log(products);
  return (
    <div className="product-grid">
      {products.map((product, idx) => (
        <div key={idx}>
          <ProductCard showDescription={false} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
