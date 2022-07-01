import React from "react";
import "./ProductCard.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Link } from "react-router-dom";
// import { useState } from "react";

const ProductCard = ({ product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription }) => {
  // const [productID, setProductID] = useState('')

  //   let {productId} = useParams()

  //   let quantity = {
  //   shopppingCart.find((item) => item.itemId === productID.id) ? shopppingCart.find((item) => item.itemId === productID.id).quantity : null
  //   }

  // useEffect( async () => {
  //     // const fetchProducts = async () => {
  //       try {
  //         const response = await axios.get(`https://localhost:3001/store` + productId);
  //         // console.log(response.data);
  //         const data = await response?.data?.product;
  //         setProductID(data)
  //       } catch (e) {
  //         //  If request not complete successfully, set error func
  //         console.log(e);
  //       }
  //     // };
  //   }, []);
  // const handleAddItemToCart = (productId) => {
  //   let newShopppingCart = [];

  //   shoppingCart.map((item, index) => {
  //     item.id === productId ? (newShopppingCart[index].quantity += 1) : null;
  //     setShoppingCart([...shoppingCart]);
  //     console.log("ERROR");
  //   });
  //   return "hello";
  // };

  // const handleRemoveItemFromCart = (productId) => {
  //   shoppingCart.map((item, index) => {
  //     let newShopppingCart = [];

  //     item.id === productId ? (newShopppingCart[index].quantity -= 1) : null;
  //     setShoppingCart([...shoppingCart]);
  //     console.log("ERROR");
  //   });
  // };

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
          <div className="quantityNum">{"Quantity: " + product.id}</div>
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
          {/* {quantity ? <span className="product-quantity">quantity</span> : null} */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
