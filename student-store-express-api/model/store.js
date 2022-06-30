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

// static async recordTransaction(transaction) {
//     // create a new transaction

//     if (!transaction) {
//       throw new BadRequestError(`No transaction sent.`)
//     }
//     const requiredFields = ["description", "category", "amount"]
//     requiredFields.forEach((field) => {
//       if (!transaction[field] && transaction[field] !== 0) {
//         throw new BadRequestError(`Field: "${field}" is required in transaction`)
//       }
//     })

//     const transactions = await Bank.listTransactions()
//     const transactionId = transactions.length + 1
//     const postedAt = new Date().toISOString()

//     const newTransaction = { id: transactionId, postedAt, ...transaction }

//     storage.get("transactions").push(newTransaction).write()

//     return newTransaction
//   }

//============================================
// Models - The API should use a Store model that handles the following
//  List all products currently in the db.json file
//  Fetch a single product by its id
//  Create a purchase order
//==================================================

//this code list all products currently in the db.json file
// Storage.get("products").value();
//get products and return one single product

module.exports = Store;
