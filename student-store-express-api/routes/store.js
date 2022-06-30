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
  //this var stores the code for getting the param "productId" in order to get a single product by its ID. Example: http://localhost:3001/store/3
  const productID = req.params.productId;
  console.log(req.params);
  const product = store.productsByID(productID);
  //this line is sending a response with a status of "200" code and a JSON response with an key of product and value of : product (which is the)
  res.status(200).json({ product: product });
});

//  It should allow POST requests to the /store endpoint:
//  The endpoint should create purchase orders for users and save them to the db.json file
// // create a new transfer
// router.post("/", async (req, res, next) => {
//   try {
//     const transfer = req.body.transfer;
//     const newTransfer = await Bank.recordTransfer(transfer);
//     res.status(201).json({ transfer: newTransfer });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
