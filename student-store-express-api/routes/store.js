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
    const shoppingCart = req.body.shoppingCart;
    const user = req.body.user;

    const purchaseOrder = store.createPurchaseOrder(user, shoppingCart);

    // When either the shoppingCart or user fields are missing. throw a 400 error.
    if (!shoppingCart || !user) {
      return next(new BadRequestError("No user and No shoppingCart"));
    }

    res.status(201).json({ purchase: purchaseOrder });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
