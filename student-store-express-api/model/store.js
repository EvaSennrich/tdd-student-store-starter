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
      receipt: this.createReceiptUser(user, shoppingCart),
    };

    // If either the quantity or itemId field is missing for any of the items in the shoppingCart, a 400 error should be thrown.
    // if (!quantity || !itemId) {
    //   throw new BadRequestError();
    // }

    //this line is for pushing and storing each user order on the db.json
    let currentPurchaseOrder = storage.get("purchases");
    currentPurchaseOrder.push(userOrder).write();
    return userOrder;
  }

  static createReceiptUser(user, shoppingCart) {
    // object that contains the user order info
    const userOrderInfo = {
      name: user.name,
      email: user.email,
    };

    let receiptContent = ["Showing receipt for " + user.name + " available at " + user.email + ":"];
    shoppingCart.forEach((item) => {
      let product = this.productsByID(item.itemId);
      let unitPrice = product.price;
      let itemsPriceTotal = unitPrice * item.quantity;
      let purchaseContent = item.quantity + " total " + item.name + " purchased at a cost of " + unitPrice + " for a total cost of " + itemsPriceTotal + ".";
      receiptContent.push(purchaseContent);
    });
    let subtotal = this.totalOrder(shoppingCart);
    let totalWithTaxes = (subtotal * 1.0875).toFixed(2);

    let subtotalReceiptContent = "Before taxes, the subtotal was " + subtotal;
    let taxesReceiptContent = "After taxes and fees were applied, the total comes out to " + totalWithTaxes;
    receiptContent.push(subtotalReceiptContent);
    receiptContent.push(taxesReceiptContent);

    let wholeReceipt = {
      userInfo: userOrderInfo,
      receiptContent: receiptContent,
    };

    return wholeReceipt;
  }
}

module.exports = Store;
