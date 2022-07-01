const express = require("express");
const app = require("../app");
const store = require("../model/store");
const router = express.Router();
const { NotFoundError, BadRequestError } = require("../utils/errors");

// get purchases and products

//getting all products using the model method "listAllProducts"
router.get("/", (req, res, next) => {
  const allProducts = store.listAllProducts();
  res.status(200).json({ products: allProducts });
});

//getting products by ID using the model method "productsByID"
router.get("/:productId", (req, res, next) => {
  const productID = req.params.productId;
  const product = store.productsByID(productID);
  res.status(200).json({ product: product });
});

//allow POST requests to the /store endpoint and creates purchase orders for users and save them to the db.json file
router.post("/", (req, res, next) => {
  try {
    const purchases = req.body;

    const shoppingCart = purchases.shoppingCart;
    const user = purchases.user;

    const purchaseOrder = store.createPurchaseOrder(user, shoppingCart);

    res.status(201).json({ purchase: purchaseOrder });
    console.log("--->", error);
  } catch (error) {
    next(error) || next(BadRequestError());
  }
});

module.exports = router;
