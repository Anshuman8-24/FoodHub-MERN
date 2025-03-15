const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  cuisine: String,
  imageUrl: String,
  contact: String,
  paymentOptions: [String],
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
