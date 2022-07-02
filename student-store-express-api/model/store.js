const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class Store {
  //List all products in the products array from the db.json
  static listAllProducts() {
    const allProducts = storage.get("products").value();
    console.log(allProducts);
    return allProducts;
  }

  // fetch a single product by its ID
  static productsByID(productById) {
    const product = storage
      .get("products")
      .find({ id: Number(productById) })
      .value();
    console.log("----->>", product);
    return product;
  }

  //get order ids
  static getId() {
    const purchases = storage.get("purchases").value();
    return purchases.length + 1;
  }

  //calculating the total per order

  static totalOrder(shoppingCart) {
    let subTotalEs = 0;
    shoppingCart.forEach((el) => {
      let product = this.productsByID(el.itemId);
      let unitPrice = product.price;
      let itemPrice = unitPrice * el.quantity;
      subTotalEs += itemPrice; //DOUBLE CHECK THIS LINE
    });
    subTotalEs = Math.round((subTotalEs + Number.EPSILON) * 100) / 100;
    return subTotalEs;
  }

  //creating issue date per order
  static issueOrder() {
    let currenDate = new Date();
    let day = currenDate.getDate();
    let month = currenDate.getMonth() + 1;
    let year = currenDate.getFullYear();

    let orderDate = "Order Issued:" + month + "/" + day + "/" + year;
    return orderDate;
  }

  static createPurchaseOrder(user, shoppingCart) {
    // object that contains the user order info
    const userOrder = {
      id: this.getId(),
      name: user.name,
      email: user.email,
      order: shoppingCart,
      total: (this.totalOrder(shoppingCart) * 1.0875).toFixed(2),
      createAt: this.issueOrder(),
    };

    // If either the quantity or itemId field is missing for any of the items in the shoppingCart, a 400 error should be thrown.
    // if (!quantity || !itemId) {
    //   throw new BadRequestError();
    // }
    let currentPurchaseOrder = storage.get("purchases");
    currentPurchaseOrder.push(userOrder).write();
    return userOrder;
  }
}

module.exports = Store;
