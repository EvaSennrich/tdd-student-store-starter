import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemToCart }) => {
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
          <ProductCard showDescription={showDescription} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
