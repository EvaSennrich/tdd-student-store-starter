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
  static productsByID(productsByID) {
    const product = storage
      .get("products")
      .find({ id: Number(productsByID) })
      .value();
    console.log("----->>", productsByID);
    return product;
  }

  //get order ids
  static getId() {
    const purchases = storage.get("purchases").value();
    return (purchases.length += 1);
  }

  //calculating the total per order
  static totalOrder(shoppingCart) {
    let subTotal = 0;

    shoppingCart.forEach((el) => {
      let product = this.productsByID(el.itemId);
      let unitPrice = product.price;
      let elPrice = unitPrice * el.quantity;
      return (subTotal += elPrice); //DOUBLE CHECK THIS LINE
    });
  }

  //creating issue date per order
  static issueOrder() {
    let currenDate = new Date();
    let day = currenDate.getDay();
    let month = currenDate.getMonth();
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
      total: this.totalOrder(shoppingCart) * 2,
      createAt: this.issueOrder(),
    };
    storage.get("purchases").push(userOrder).write();
    return userOrder;
  }
}

module.exports = Store;
