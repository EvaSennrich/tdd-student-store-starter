import React from "react";
import "./ProductCard.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Link } from "react-router-dom";

const ProductCard = ({ product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription }) => {
  return (
    //Here I'm wrapping my img to be "clickable" and send/ route the user to whatever product.id was clicked on. -->  The logic is in the ProductDetail component file.

    <div className="product-card">
      <Link to={"/products/" + product.id}>
        <div className="product-image-cont">
          <img className="product-img" src={product.image} alt={product.name + "image"} onClick={showDescription} />
        </div>
      </Link>
      <div className="product-info">
        <div className="product-main-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="stars">
            <StarIcon style={{ color: "#ffdf00" }} />
            <StarIcon style={{ color: "#ffdf00" }} />
            <StarIcon style={{ color: "#ffdf00" }} />
            <StarIcon style={{ color: "#ffdf00" }} />
            <StarHalfIcon style={{ color: "#ffdf00" }} />
          </div>
          <p className="product-price">{"Price: $" + product.price}</p>
          <div className="quantityNum">{product.quantity}</div>
        </div>
        <div className="product-btns">
          <div className="remove-btn">
            <button className="removeBtn" onClick={() => handleRemoveItemFromCart(product.id)}>
              -
            </button>
          </div>
          <div className="add-btn">
            <button className="addBtn" onClick={() => handleAddItemToCart(product.id)}>
              +
            </button>
          </div>
          {/* {quantity ? <span className="product-quantity">{product.quantity}</span> : null} */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
