const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class Store {
  static listAllProducts() {
    //List all products in the products array from the db.json
    const allProducts = storage.get("products").value();
    console.log(allProducts);
    return allProducts;
  }

  static productsByID(productsByID) {
    // fetch a single product by its ID
    const product = storage
      .get("products")
      .find({ id: Number(productsByID) })
      .value();
    console.log("----->>", productsByID);
    return product;
  }

  static createPurchaseOrder() {
    //  Create a purchase order\
    // create and object with : id, name, email, order, totatl, createAT, receipt
  }
}

module.exports = Store;
