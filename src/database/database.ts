const mongoose = require("mongoose");

export const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/OnlineShopDB")
    console.log("Connected to mongodb.");
  } catch (error) {
    console.log(error);
  }
}